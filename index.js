const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/watch?v=U-B5dMDx40g");
  const title = await page.title();
  const url = page.url();
  console.log(title, url);
  await browser.close();
})();
