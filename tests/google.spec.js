import { test, expect } from '@playwright/test';

test("Verify Google application title", async ({page}) => {

    await page.goto("https://google.com");

    const url = await page.url();

    console.log("URL is "+url);
    
    
    const title = await page.title();

    console.log("Title is "+title);

    await expect(page).toHaveTitle(title);

    await expect(page).toHaveTitle("Google");

});