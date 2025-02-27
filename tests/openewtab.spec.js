const { test, expect } = require('@playwright/test');

test('Test to open new tab', async ({ page }) => {
    const newPage = await page.context().newPage();
    
});