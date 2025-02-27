const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Access Dashboard with Saved Cookies', async ({ page }) => {
  // Load saved cookies
  const cookies = JSON.parse(fs.readFileSync('./data/auth-cookies.json', 'utf8'));
  await page.context().addCookies(cookies);

  // Navigate to the dashboard (should be logged in)
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Verify login success
  await expect(page.locator('text=Welcome')).toBeVisible();
});
