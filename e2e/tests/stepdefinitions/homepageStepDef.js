
const { Given, When, Then } = require("@cucumber/cucumber");
const HomePage = require("../pages/homepage")
const getPage = require('../../corelib/corelib');



Then('Home page should be displayed', async function () {
    //pass cucumber ICreate log to the pages
    const homePage = new HomePage(getPage(),this.log)
    await homePage.verifyHomePageDisplayed();
});
Then('user logs out', async function () {
    const homePage = new HomePage(getPage())
    await homePage.logout();
    this.log(`logout is successful`);
});



