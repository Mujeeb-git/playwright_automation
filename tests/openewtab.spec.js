const { test, expect } = require('@playwright/test');

test('Test to open new tab', async ({ page }) => {
    const newPage = await page.context().newPage();
    
    const elements = page.locator('a'); //elements

    elements.first(); //get first element

    elements.last(); //get last element

    elements.nth(5); //get 5th element
    
});