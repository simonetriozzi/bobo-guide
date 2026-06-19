import fs from 'fs';
import google from 'googlethis';

(async () => {
  console.log("Reading data.js...");
  let dataContent = fs.readFileSync('./src/data.js', 'utf8');
  
  // Extract place names
  const names = [...dataContent.matchAll(/name:\s*"(.*?)"/g)].map(m => m[1]);
  const ids = [...dataContent.matchAll(/id:\s*"(.*?)"/g)].map(m => m[1]);
  
  const places = ids.map((id, index) => ({ id, name: names[index] }));
  
  const imageMap = {};

  for (const place of places) {
    console.log(`Scraping Google Images for: ${place.name} Genova`);
    try {
      // Use " Genova" or the specific city to improve local search results
      const query = place.name === "La Brinca" ? "La Brinca Ne ristorante" : `${place.name} Genova ristorante`;
      const images = await google.image(query, { safe: false });
      
      // Filter out low quality or icon URLs, get top 4
      const validUrls = images
        .map(img => img.url)
        .filter(url => url.startsWith('http') && !url.includes('fbsbx.com') && !url.includes('icon'))
        .slice(0, 4);
        
      if (validUrls.length > 0) {
        imageMap[place.id] = validUrls;
        console.log(`✅ Found ${validUrls.length} images for ${place.name}`);
      } else {
        console.log(`❌ No images found for ${place.name}`);
      }
    } catch (e) {
      console.log(`Error scraping ${place.name}:`, e.message);
    }
    
    // Add small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 2000));
  }
  
  // Replace the images array in data.js
  for (const place of places) {
    if (imageMap[place.id]) {
      const imagesStr = JSON.stringify(imageMap[place.id]);
      
      // We need to replace the specific images array for this place
      // A safe way is to find the block of this place and replace its images array
      const placeRegex = new RegExp(`(id:\\s*"${place.id}"[\\s\\S]*?images:\\s*)\\[.*?\\]`);
      dataContent = dataContent.replace(placeRegex, `$1${imagesStr}`);
    }
  }

  fs.writeFileSync('./src/data.js', dataContent);
  console.log("data.js successfully updated with real Google Images!");
})();
