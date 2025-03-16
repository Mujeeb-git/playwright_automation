const loginPageLoc = require("../locators/loginpagelocators.json");
const BasePage = require("../pages/basepage");
class LoginPage extends BasePage {
    constructor(page,log) {
        super(page,log);
    }


    async navigateToLoginPage() {
        //await this.page.locator(loginPageLoc.myAccountLink.locator).click();
        await this.click(loginPageLoc.myAccountLink);

    }

    async loginToApplication(uname, pwd) {
        this.log("user entering username and password");
        //adding locator options and action options just to demonstrate
        // await this.page.locator(loginPageLoc.usernameField.locator).waitFor(loginPageLoc.usernameField.actionsOptions);
        // await this.page.locator(loginPageLoc.usernameField.locator,loginPageLoc.usernameField.locatorOptions).fill(uname);
        // await this.page.locator(loginPageLoc.passwordField.locator).fill(pwd);
        // await this.page.locator(loginPageLoc.loginButton.locator,loginPageLoc.loginButton.locatorOptions).click(loginPageLoc.loginButton.actionsOptions);

        //await this.page.locator(loginPageLoc.usernameField.locator).waitFor(loginPageLoc.usernameField.actionsOptions);
        await this.enter(loginPageLoc.usernameField,process.env.user_name);
        await this.enter(loginPageLoc.passwordField,process.env.password);
        await this.click(loginPageLoc.loginButton);
    }


}

module.exports = LoginPage;
