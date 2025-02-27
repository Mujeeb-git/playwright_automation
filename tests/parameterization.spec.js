const { test, expect } = require("@playwright/test");
const testdata = JSON.parse(JSON.stringify(require("../data/testdata.json")));

test("Verify parameterization login", async ({ page }) => {

    //open browser page with an application
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("//input[@id='name']").fill(testdata.name);

    await page.locator("//input[@id='email']").fill(testdata.username);

    await page.locator("//input[@id='password']").fill(testdata.password);

    //check multiple checkboxes based on the testdata
    for (const interest of testdata.interest) {
        await page.locator("//label[normalize-space()='" + interest + "']/preceding-sibling::div/input").click();
    }

    await page.locator("//label[normalize-space()='"+testdata.gender+"']/preceding-sibling::input").click();

    await page.locator("//select[@id='state']").selectOption({value: testdata.address.state});

});