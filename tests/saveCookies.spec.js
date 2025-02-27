const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Login and Save Cookies', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //here added optional - delay time just to demonstrate but not required
    await page.getByPlaceholder("Username").fill("Admin",200);

    await page.locator("input[name='password']").fill("admin123",300);

    await page.locator("//button[@type='submit']").click();

  // Wait for navigation or successful login state
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Get cookies
  const cookies = await page.context().cookies();
  
  // Save cookies to a file
  fs.writeFileSync('./data/auth-cookies.json', JSON.stringify(cookies, null, 2));

  console.log('Cookies saved successfully!');
});
