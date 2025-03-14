const loginPageLoc = require("../locators/loginpagelocators.json");
class LoginPage {
    constructor(page) {
        if (!page) {
            throw new Error("Page object is required and cannot be undefined!");
        }
        this.page = page;
    }

    async launchURL(url) {
        await this.page.goto(url);
    }
    async navigateToLoginPage() {
        await this.page.locator(loginPageLoc.myAccountLink.locator).click();
    }

    async loginToApplication(uname, pwd) {
        console.log("user enters username and password");
        //adding locator options and action options just to demonstrate
        await this.page.locator(loginPageLoc.usernameField.locator).waitFor(loginPageLoc.usernameField.actionsOptions);
        await this.page.locator(loginPageLoc.usernameField.locator,loginPageLoc.usernameField.locatorOptions).fill(uname);
        await this.page.locator(loginPageLoc.passwordField.locator).fill(pwd);
        await this.page.locator(loginPageLoc.loginButton.locator,loginPageLoc.loginButton.locatorOptions).click(loginPageLoc.loginButton.actionsOptions);
    }


}

module.exports = LoginPage;
