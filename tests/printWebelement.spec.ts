import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');

  // Get all anchor elements
  const links = await page.$$('a');

  for (const link of links) {
    const text = await link.textContent();
    const href = await link.getAttribute('href');
    console.log(`Text: ${text} | Href: ${href}`);
  }

  await browser.close();
})();
