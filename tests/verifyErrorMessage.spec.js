const {test,expect} = require("@playwright/test")

test("Verify Error message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log("Width: "+page.viewportSize().width);

    console.log("Height: "+page.viewportSize().height);


    await page.getByPlaceholder("Username").fill("Admin");

    await page.locator("input[name='password']").fill("admin");

    await page.locator("//button[normalize-space()='Login']").click();

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();

    console.log(`Error message is '${errorMessage}'`);

    expect(errorMessage.includes("Invalid")).toBeTruthy();

    expect(errorMessage.includes("Error")).toBeFalsy();

    expect(errorMessage==="Invalid credentials").toBeTruthy();
    expect(errorMessage==="Invalid credential").toBeTruthy();

});