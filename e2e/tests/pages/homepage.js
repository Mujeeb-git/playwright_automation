
const { expect } = require("@playwright/test")
const homepageloc = require("../locators/homepagelocators.json");
class HomePage {
    page;
    constructor(page) {
        if (!page) {
            throw new Error("Page object is required and cannot be undefined!");
        }
        this.page = page;
    }

    async verifyHomePageDisplayed() {
        console.log("Home page is displayed");
        console.log(await this.page.locator(homepageloc.myAccountLabel.locator).textContent());
        expect(this.page.locator(homepageloc.myAccountlink.locator).isVisible()).toBeTruthy();
    }

    async logout() {
        await this.page.locator(homepageloc.logoutButton.locator).click();
    }

}

module.exports = HomePage;

