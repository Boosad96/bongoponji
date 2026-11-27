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
  await expect(page.locator('#bengali-result')).toContainText('১ বৈশাখ ১৪৩৪');
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

test('shows the civil Bengali age and next birthday', async ({ page }) => {
  await page.clock.setFixedTime(new Date('2027-04-13T12:00:00Z'));
  await page.goto('/tools/age-calculator/');
  await page.getByLabel('গ্রেগরিয়ান জন্মতারিখ').fill('2020-04-14');
  await page.getByRole('button', {name:'হিসাব করুন'}).click();
  await expect(page.locator('#birthday-result')).toContainText('পূর্ণ বয়স ৬ বছর');
  await expect(page.locator('#birthday-result')).toContainText('১৪ এপ্রিল');
});

test('embeds only verified festival dates and permits framing on the widget route', async ({ page }) => {
  const response = await page.goto('/widgets/embed/?mode=festival&festival=pohela-boishakh');
  expect(response?.headers()['x-frame-options']).toBeUndefined();
  expect(response?.headers()['x-robots-tag']).toBe('noindex');
  await expect(page.getByRole('heading', {name:'পয়লা বৈশাখ'})).toBeVisible();
  await page.goto('/widgets/embed/?mode=festival&festival=kali-puja');
  await expect(page.getByText('এই উৎসবের যাচাইকৃত তারিখ পাওয়া যায়নি।')).toBeVisible();
});


test('switches civil calendar years while preserving the selected month', async ({ page }) => {
  await page.goto('/calendar/2028/february/');
  const years = page.getByRole('navigation', { name: 'ক্যালেন্ডারের বছর বেছে নিন' });
  await years.getByRole('link', { name: '২০৩০' }).click();
  await expect(page).toHaveURL(/\/calendar\/2030\/february\/$/);
  await expect(years.getByRole('link', { name: '২০৩০' })).toHaveAttribute('aria-current', 'page');
});

test('converts the prefilled date on the first click', async ({ page }) => {
  await page.goto('/tools/date-converter/');
  await page.locator('#to-bengali button').click();
  await expect(page.locator('#bengali-result')).toContainText('১ বৈশাখ ১৪৩৪');
  await expect(page.locator('#bengali-result')).toContainText('সংশোধিত নাগরিক বর্ষপঞ্জি');
  await expect(page.getByRole('heading', { name: 'ফলাফল:' })).toBeVisible();
});

test('shows adult Gregorian age and explains Bengali birthday coverage', async ({ page }) => {
  await page.clock.setFixedTime(new Date('2026-11-27T12:00:00Z'));
  await page.goto('/tools/bengali-birthday/');
  await page.getByLabel('গ্রেগরিয়ান জন্মতারিখ').fill('১৯৯০-০৪-১৪');
  await page.getByRole('button', { name: 'হিসাব করুন' }).click();
  const result = page.locator('#birthday-result');
  await expect(result).toContainText('গ্রেগরিয়ান হিসাবে পূর্ণ বয়স ৩৬ বছর');
  await expect(result).toContainText('সমর্থিত সীমার আগে');
  await page.getByLabel('গ্রেগরিয়ান জন্মতারিখ').fill('২০২০-০৪-১৪');
  await page.getByRole('button', { name: 'হিসাব করুন' }).click();
  await expect(result).toContainText('পূর্ণ বয়স ৬ বছর');
  await expect(result).toContainText('পরের জন্মদিন ১ বৈশাখ ১৪৩৪');
  await expect(result).toContainText('১৪ এপ্রিল');
});

test('highlights today in a month table and fits key pages at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.clock.setFixedTime(new Date('2026-11-27T12:00:00Z'));
  for (const path of ['/', '/tools/date-converter/', '/calendar/2026/november/', '/calendar/2026/', '/panjika/today/?date=2026-11-27']) {
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBe(390);
  }
  await page.goto('/calendar/2026/november/');
  await expect(page.locator('td[aria-current=date] time')).toHaveAttribute('datetime', '2026-11-27');
  await page.goto('/calendar/2027/april/');
  await expect(page.getByRole('link', { name: 'পয়লা বৈশাখ', exact: true })).toBeVisible();
});
