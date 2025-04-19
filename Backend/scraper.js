const puppeteer = require('puppeteer');

async function scrapeAmazon(query) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`https://www.amazon.com/s?k=${encodeURIComponent(query)}`, {
    waitUntil: 'domcontentloaded',
  });

  const products = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('[data-component-type="s-search-result"]'));
    return items.map(el => {
      const title = el.querySelector('h2 span')?.textContent?.trim();
      const price = el.querySelector('.a-price span.a-offscreen')?.textContent?.replace('$', '') || null;
      const rating = el.querySelector('.a-icon-alt')?.textContent?.split(' ')[0] || null;
      const reviews = el.querySelector('[aria-label*="out of 5 stars"] ~ span')?.textContent?.replace(/[^0-9]/g, '') || null;
      const url = 'https://www.amazon.com' + el.querySelector('h2 a')?.getAttribute('href');

      return { title, price: price ? parseFloat(price) : null, rating: rating ? parseFloat(rating) : null, reviews: reviews ? parseInt(reviews) : null, url };
    }).filter(p => p.title && p.price);
  });

  await browser.close();

  return products.sort((a, b) => a.price - b.price);
}

module.exports = { scrapeAmazon };
