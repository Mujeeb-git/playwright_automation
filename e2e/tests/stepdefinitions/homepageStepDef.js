
const { Given, When, Then } = require("@cucumber/cucumber");
const HomePage = require("../pages/homepage")
const getPage = require('../../corelib/corelib');



Then('Home page should be displayed', async function () {
    const homePage = new HomePage(getPage())
    await homePage.verifyHomePageDisplayed();
});



