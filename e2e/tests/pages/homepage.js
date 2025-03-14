
const {expect} = require("@playwright/test")
class HomePage {
    page;
    constructor(page) {
        if (!page) {
            throw new Error("Page object is required and cannot be undefined!");
        }
        this.page = page;
        this.myAccountLabel = "//li[@class='breadcrumb-item active']";
        this.myAccountlink = "//a[@class='list-group-item active'][normalize-space()='My Account']";
        this.logoutButton = "//a[contains(text(),'Logout')]";

    }

    async verifyHomePageDisplayed(){
        console.log("Home page is displayed");
        console.log(await this.page.locator("//li[@class='breadcrumb-item active']").textContent());
        expect(this.page.locator("//a[@class='list-group-item active'][normalize-space()='My Account']").isVisible()).toBeTruthy();
    }

    async logout() {
        await this.page.locator(this.logoutButton).click();
    }

}

module.exports = HomePage;

