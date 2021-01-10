const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8082/main.html');
  const a = await page.$('a');
  const box = await a.asElement().boxModel();
  console.log(box);
  await browser.close();
})();