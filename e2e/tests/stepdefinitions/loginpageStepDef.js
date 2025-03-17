
const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pages/loginpage")
const getPage = require('../../corelib/corelib');
const url = "https://ecommerce-playground.lambdatest.io";


Given('user is on login page', async function () {
    //custom log
    this.attach(`This is the start of the scenario to login`);
    //pass cucumber Icreate log to the pages in the second argument
    const loginPage = new LoginPage(getPage(),this.attach);
    await loginPage.navigateToLoginPage();
    this.attach(`login is successful`);
    this.parameters.a=10;
});

When('user enters username and password', async function () {
    const loginPage = new LoginPage(getPage());
    await loginPage.loginToApplication();
    console.log(`utilizing this parameter in same login page as ${this.parameters.a}`);
});



