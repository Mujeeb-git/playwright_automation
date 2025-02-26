const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("Select values from the Dropdown", async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.waitForTimeout(1000);

    let state = await page.$("#state");

    let allElements = await state.$$("option");

    let ddStatus = false;

    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let value = await element.textContent();
        console.log(`Value ${i} from the dropdown using loop: ${value}`);

        if (value.includes("Rajasthan")) {
            ddStatus = true;
            break;
        }
    }

    expect(ddStatus).toBeTruthy();

    //select multiple select values
    await page.locator("#hobbies").selectOption(['Playing', 'Swimming']);

    await page.waitForTimeout(5000);
})