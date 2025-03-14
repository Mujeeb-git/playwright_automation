
const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pages/loginpage")
const getPage = require('../../corelib/corelib');
const url = "https://ecommerce-playground.lambdatest.io/index.php?route=account/login";


Given('user is on login page', async function () {
    const loginPage = new LoginPage(getPage());
    await loginPage.launchURL(url);
});

When('user enters username as {string} and password as {string}', async function (uname, pwd) {
    const loginPage = new LoginPage(getPage());
    await loginPage.loginToApplication(uname,pwd);
});



