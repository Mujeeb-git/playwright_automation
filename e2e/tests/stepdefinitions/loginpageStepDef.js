
const { Given, When, Then } = require("@cucumber/cucumber");
const {page} = require("../../corelib/corelib")
const url = "https://ecommerce-playground.lambdatest.io/index.php?route=account/login";
const { expect } = require("@playwright/test");

Given('user is on login page', async function () {
    await this.page.goto(url);
});

When('user enters username as {string} and password as {string}', async function (uname, pwd) {
    console.log("user enters username and password");
    await this.page.locator("//input[@placeholder='E-Mail Address']").waitFor();
    await this.page.locator("//input[@placeholder='E-Mail Address']").fill("dummy1234@gmail.com");
    await this.page.locator("//input[@placeholder='Password']").fill("dummy1234@gmail.com");
    await this.page.locator("//input[@type='submit']").click();

});


Then('Home page should be displayed', async function () {
    console.log("Home page is displayed");
    await this.page.locator("//li[@class='breadcrumb-item active']").waitFor();
    expect(this.page.locator("//a[@class='list-group-item active'][normalize-space()='My Account']").isVisible()).toBeTruthy();
});



