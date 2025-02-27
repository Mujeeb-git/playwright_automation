class LoginPage{


    constructor(page){
        this.page = page;
        this.username = "#email1";
        this.password = "//input[@id='password1']";
        this.loginButton = "//button[text()='Sign in']";
    }

    async loginToApplication(uname,pwd){
        await  this.page.fill(this.username,uname);
        await this.page.fill(this.password,pwd);
        await this.page.click(this.loginButton);
    }

}

module.exports = LoginPage;