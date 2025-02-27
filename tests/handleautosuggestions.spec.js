const { test, expect } = require("@playwright/test");

test("Verify auto suggestions ", async function ({ page }) {
    await page.goto("https://www.google.com");

    await page.locator("textarea[name='q']").fill("Mujeeb");

    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Enter");
});

test("Verify Application title using keyboard", async function ({ page }) {
    await page.goto("https://www.google.com");

    await page.locator("textarea[name='q']").fill("playwright");

    await page.waitForSelector("//li[@role='presentation']");

    const elements = await page.$$("//li[@role='presentation']");

    for(let i=0; i<elements.length;i++){
        
        const text = await elements[i].textContent();
       // console.log(`Autosuggestion-${i+1} :${text}`);

        if(text.includes("testing")){
            await elements[i].click();
            break;
        }

    }


    await page.keyboard.press("Enter");
});