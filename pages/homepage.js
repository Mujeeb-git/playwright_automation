const {expect}  = require("@playwright/test");

class HomePage{

    constructor(page){
        this.page = page;
        this.menu = "//img[@alt='menu']";
        this.signout = "//button[normalize-space()='Sign out']";
        this.manageoption = "//span[normalize-space()='Manage']";
    }

    async logoutFromApplication(){
        await this.page.click(this.menu);
        await this.page.click(this.signout);
    }

    async verifyManageOption(){
        await expect(this.page.locator(this.manageoption)).toBeVisible();
    }

}

module.exports = HomePage;