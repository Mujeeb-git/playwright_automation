const { test, expect } = require("@playwright/test");

test("Verify file upload", async function ({ page }) {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./upload/andhrapradesh.jpeg");

    await page.locator("#file-submit").click();

    await expect(page.locator("//h3")).toHaveText("File Uploaded!");

    
})