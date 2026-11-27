import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ colorScheme: 'light' });
  const response = await page.goto('http://127.0.0.1:4321/calendar/2027/');
  if (!response?.ok() || await page.locator('table.calendar').count() !== 12) {
    throw new Error('Expected the locally served 12-month calendar');
  }
  await page.evaluate(() => document.fonts.ready.then(() => true));
  await page.pdf({
    path: fileURLToPath(new URL('../public/downloads/bangladesh-calendar-2027.pdf', import.meta.url)),
    format: 'A4', printBackground: true, margin: { top: '12mm', bottom: '12mm', left: '10mm', right: '10mm' },
  });
} finally {
  await browser.close();
}
