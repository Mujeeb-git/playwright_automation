class LoginPage {
    constructor(page) {
        if (!page) {
            throw new Error("Page object is required and cannot be undefined!");
        }
        this.page = page;
        this.username = "//input[@placeholder='E-Mail Address']";
        this.password = "//input[@placeholder='Password']";
        this.loginButton = "//input[@type='submit']";
    }

    async launchURL(url) {
        await this.page.goto(url);
    }

    async loginToApplication(uname, pwd) {
        console.log("user enters username and password");
        await this.page.locator("//input[@placeholder='E-Mail Address']").waitFor();
        await this.page.locator("//input[@placeholder='E-Mail Address']").fill(uname);
        await this.page.locator("//input[@placeholder='Password']").fill(pwd);
        await this.page.locator("//input[@type='submit']").click();
    }


}

module.exports = LoginPage;
