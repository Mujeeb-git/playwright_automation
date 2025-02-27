const { test, expect } = require("@playwright/test");
const testdata = JSON.parse(JSON.stringify(require("../data/testlogin.json")));

test.describe("Data driven login Test", () => {

    for (const data of testdata) {

       // test.describe(`Login with Users ${data.id}`, () => {

            test(`Login Test for ${data.id}`, async ({ page }) => {
                //open browser page with an application
                await page.goto("https://freelance-learn-automation.vercel.app/login");

                await page.locator("//input[@id='email1']").fill(data.username);

                await page.locator("//input[@id='password1']").fill(data.password);

            });

      //  });
    }

});