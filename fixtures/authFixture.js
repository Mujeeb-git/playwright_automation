import { test as base,expect } from '@playwright/test';

export const test = base.extend({
  authPage: async ({ page }, use) => {  // ✅ Explicitly defining 'authPage'

    // Perform login
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin",200);
    await page.locator("input[name='password']").fill("admin123",300);
    await page.locator("//button[@type='submit']").click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');   

    // Pass the authenticated page to the test
    await use(page); 

     // Cleanup after test
     //await context.close();
  }
});

export { expect };
