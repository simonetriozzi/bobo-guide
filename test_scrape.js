const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/maps/place/?q=place_id:ChIJU7lnJtm81BIRoueYJ7M1hRY', { waitUntil: 'networkidle2' });
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('button img')).map(img => img.src).filter(src => src.includes('googleusercontent.com/p/'));
  });
  console.log(images);
  await browser.close();
})();
