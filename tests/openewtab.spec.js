const { test, expect } = require('@playwright/test');

test('Test to open new tab', async ({ page }) => {
    const newPage = await page.context().newPage();
    
    const elements = page.locator('a'); //elements

    elements.first(); //get first element

    elements.last(); //get last element

    elements.nth(5); //get 5th element
    
});

test("test2", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev");
    //await page.locator("//a/span[text()='Star']").click();

    const [newPage] = await Promise.all(
        [context.waitForEvent("page"),
         page.locator("//a/span[text()='Star']").click(),
        ]
    );
    await page.waitForLoadState("domcontentloaded");
    expect(newPage.url()).toBe("https://github.com/microsoft/playwright");
    console.log(`URL: ${newPage.url()}`)
    newPage.locator("h1.heading-element").scrollIntoViewIfNeeded();
    newPage.pause();
});