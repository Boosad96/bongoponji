import { expect, test } from '@playwright/test';

test('mobile navigation and source-rendered calendar', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', {name:'ক্যালেন্ডার', exact:true}).click();
  await page.getByRole('link', {name:'২০২৭ ক্যালেন্ডার'}).click();
  await page.getByRole('link', {name:'জানুয়ারি', exact:true}).click();
  await expect(page.locator('table time[datetime="2027-01-01"]')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(412);
});

test('converts Bengali numeral input in both directions', async ({ page }) => {
  await page.goto('/tools/date-converter/');
  await page.getByLabel('গ্রেগরিয়ান তারিখ').fill('২০২৭-০৪-১৪');
  await page.locator('#to-bengali button').click();
  await expect(page.locator('#bengali-result')).toHaveText('১ বৈশাখ ১৪৩৪');
  await page.getByLabel('বাংলা বছর').fill('১৪৩৪');
  await page.getByLabel('দিন', {exact:true}).fill('১');
  await page.locator('#to-gregorian button').click();
  await expect(page.locator('#gregorian-result')).toContainText('১৪ এপ্রিল');
});

test('city selector and daily dates work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({javaScriptEnabled:false});
  const page = await context.newPage();
  const response = await page.goto('/panjika/today/?city=dhaka');
  expect(response?.headers()['cache-control']).toContain('no-store');
  await expect(page.getByText('Asia/Dhaka')).toBeVisible();
  const today = await page.locator('.hero time').getAttribute('datetime');
  await page.getByRole('link', {name:'আগামীকালের পঞ্জিকা'}).click();
  const tomorrow = await page.locator('.hero time').getAttribute('datetime');
  expect(Date.parse(tomorrow!) - Date.parse(today!)).toBe(86400000);
  await expect(page.getByText('প্রকাশ অপেক্ষমাণ', {exact:true})).toBeVisible();
  await context.close();
});
