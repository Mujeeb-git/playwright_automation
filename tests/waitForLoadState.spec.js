const {test,expect} = require("@playwright/test");

test("Working with Load State", async ({page}) => {

    //open browser page with an application
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText("New User? Signup").click();

    //waiting for all the network call to complete
    await page.waitForLoadState("networkidle");


    const checkboxCount = await page.locator("//input[@type='checkbox']").count();

    expect(checkboxCount).toBe(7);
});