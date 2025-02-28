const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginpage");
const HomePage = require("../pages/homepage");

test("Verify login and logout of application", async ({ page }) => {

    //open browser page with an application
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage = new LoginPage(page);

    await loginPage.loginToApplication("admin@email.com","admin@123");


    const homepage = new HomePage(page);

    //validations
    homepage.verifyManageOption();

    await homepage.logoutFromApplication();



});