const { test, expect } = require("@playwright/test");

test("Verify keyboard actions", async function ({ page }) {

    await page.goto("https://www.google.com");

    // await page.locator("textarea[name='q']").fill("Mujeeb Miya Mohammed");

    // //await page.keyboard.press("Enter"); //single key press

    // await page.keyboard.press("Meta+A");

    // await page.keyboard.press("Meta+C")

    // await page.keyboard.press("Backspace");

    // await page.keyboard.press("Meta+V");

    await page.locator("textarea[name='q']").focus();

    await page.keyboard.type("Mujeeb Miya Mohammed!");

    await page.keyboard.press("ArrowLeft");

    await page.keyboard.down("Shift");

    //press the key number of times mentioned
    for (let i = 0; i < "Miya Mohammed".length; i++) {
        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");

    await page.keyboard.press("Enter");


});