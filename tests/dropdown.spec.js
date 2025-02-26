const {test,expect} = require("@playwright/test");
const exp = require("constants");

test("Select values from the Dropdown", async function({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label: "Goa"});
    await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({value: "Himachal Pradesh"});
    await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({index: 4});
    await page.waitForTimeout(1000);

    const values = await page.locator("#state").textContent();
    console.log("All dropdown values: "+values);

    expect(values.includes("Kerala")).toBeTruthy();

    await page.waitForTimeout(3000);
    
})