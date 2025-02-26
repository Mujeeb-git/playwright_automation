const {test,expect} = require("@playwright/test");

test("Handle Alerts", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog',async (d) =>{
        expect(d.type()).toContain("alert");
        expect(d.message()).toContain("I am a JS Alert");
        //expect(d.type()).toContain("confirm"); //negative validation
        await d.accept();
    });

    await page.locator("//button[text()='Click for JS Alert']").click();

});

test("Handle Confirm box", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog',async (dialogWindow) =>{
        expect(dialogWindow.type()).toContain("confirm");
        expect(dialogWindow.message()).toContain("I am a JS Confirm");
        //expect(d.type()).toContain("confirm"); //negative validation
        //await dialogWindow.accept(); we can accept or dismiss
        await dialogWindow.dismiss();
    });

    await page.locator("//button[text()='Click for JS Confirm']").click();

});

test("Handle Prompt box", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog',async (dialogWindow) =>{
        expect(dialogWindow.type()).toContain("prompt");
        expect(dialogWindow.message()).toContain("I am a JS prompt");
        await dialogWindow.accept("Hello there");
    
    });

    await page.locator("//button[text()='Click for JS Prompt']").click();

});