import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching...");
  try {
    const browser = await puppeteer.launch({ 
      headless: "new",
      timeout: 120000,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
    });
    console.log("Launched!");
    await browser.close();
  } catch (e) {
    console.log(e);
  }
})();
