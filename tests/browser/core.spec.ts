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

test('navigates dates and preserves the selected calendar', async ({ page }) => {
  await page.goto('/panjika/today/?city=kolkata&region=west-bengal&date=2026-12-02');
  await page.getByRole('link', {name:'পরের দিন',exact:true}).click();
  await expect(page.locator('.hero time').first()).toHaveAttribute('datetime','2026-12-03');
  await page.getByLabel('বর্ষপঞ্জি').selectOption('bangladesh');
  await page.getByRole('button', {name:'দেখুন',exact:true}).click();
  await expect(page.locator('.hero time').first()).toHaveAttribute('datetime','2026-12-03');
  await expect(page.getByText('প্রকাশ অপেক্ষমাণ',{exact:true})).toBeVisible();
  await expect(page.getByText('Asia/Kolkata')).toBeVisible();
});

test('keeps the selected theme through navigation', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await page.getByRole('button', {name:'আলো বা অন্ধকার রং বদলান'}).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
});
