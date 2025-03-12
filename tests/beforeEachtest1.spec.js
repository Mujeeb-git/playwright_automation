const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev");
});

test("test1", async ({ page }) => {
    await page.locator("//a[normalize-space()='Get started']").click();
});

