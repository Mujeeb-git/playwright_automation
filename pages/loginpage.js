
class LoginPage{

    constructor(page){
        this.page = page;
        this.username = "//input[@placeholder='Username']";
        this.password = "//input[@placeholder='Password']";
        this.loginButton = "//button[@type='submit']";
        this.dashboardPageIdentifier = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    }

    async launchURL(url){
    await this.page.goto(url);
    }

    async loginToApplication(uname,pwd){
        await this.page.fill(this.username,uname);
        await this.page.fill(this.password,pwd);
        await this.page.locator(this.loginButton).click();
        await this.dashboardPageIdentifier.waitFor({timeout: 5000});
    }

  
}

module.exports = {LoginPage};