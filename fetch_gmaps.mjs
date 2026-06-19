import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  console.log("Starting Puppeteer to scrape Google Maps...");
  
  // Parse data.js manually
  const dataContent = fs.readFileSync('./src/data.js', 'utf8');
  // Match the googleMapsLink values
  const links = [...dataContent.matchAll(/googleMapsLink:\s*"(.*?)"/g)].map(m => m[1]);
  const ids = [...dataContent.matchAll(/id:\s*"(.*?)"/g)].map(m => m[1]);
  const names = [...dataContent.matchAll(/name:\s*"(.*?)"/g)].map(m => m[1]);
  
  const places = ids.map((id, index) => ({
    id,
    name: names[index],
    googleMapsLink: links[index]
  }));

  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = {};

  for (const place of places) {
    if (!place.googleMapsLink) continue;
    
    console.log(`Scraping ${place.name}...`);
    const page = await browser.newPage();
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    try {
      await page.goto(place.googleMapsLink, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait a bit for images to load in the sidebar
      await new Promise(r => setTimeout(r, 3000));
      
      // Extract images. Google Maps typically uses images from lh3 or lh5.googleusercontent.com/p/
      const extractedImages = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'));
        const validUrls = images
          .map(img => img.src)
          .filter(src => src && (src.includes('googleusercontent.com/p/') || src.includes('ggpht.com/p/')))
          .map(src => {
            // Usually URLs end with =w...-h...-k-no. Let's try to get higher res by removing or changing these params
            // We'll just take the base URL and add =w800-h600-k-no to force a good size
            try {
               const baseUrl = src.split('=')[0];
               return baseUrl + '=w800-h600-k-no';
            } catch (e) {
               return src;
            }
          });
          
        // Deduplicate
        return [...new Set(validUrls)];
      });
      
      if (extractedImages.length > 0) {
        // Take up to 5 images
        results[place.id] = extractedImages.slice(0, 5);
        console.log(`✅ Found ${extractedImages.length} images for ${place.name}`);
      } else {
        console.log(`❌ No images found for ${place.name}`);
      }
      
    } catch (err) {
      console.error(`Error scraping ${place.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  
  fs.writeFileSync('scraped_images.json', JSON.stringify(results, null, 2));
  console.log("Scraping complete. Results saved to scraped_images.json");
})();
