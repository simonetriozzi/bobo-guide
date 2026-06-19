import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ 
    headless: "new",
    timeout: 120000,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  await page.goto("https://www.google.com/maps/place/?q=place_id:ChIJU7lnJtm81BIRoueYJ7M1hRY", { waitUntil: 'networkidle2', timeout: 120000 });
  
  // Wait a bit to ensure the place panel is fully loaded
  await new Promise(r => setTimeout(r, 5000));
  
  const extractedImages = await page.evaluate(() => {
    const urls = [];
    
    // Check all img tags
    document.querySelectorAll('img').forEach(img => {
      if (img.src && img.src.includes('googleusercontent.com/p/')) {
        urls.push(img.src);
      }
    });
    
    // Check all elements with background-image
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg.includes('googleusercontent.com/p/')) {
        // Extract URL from url("...")
        const match = bg.match(/url\("?([^"]*)"?\)/);
        if (match && match[1]) urls.push(match[1]);
      }
    });

    const validUrls = urls.map(src => {
        try {
           const baseUrl = src.split('=')[0];
           return baseUrl + '=w800-h600-k-no';
        } catch (e) {
           return src;
        }
      });
    return [...new Set(validUrls)];
  });
  
  console.log("Images found:", extractedImages);
  await browser.close();
})();
