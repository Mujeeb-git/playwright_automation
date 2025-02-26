const {test, expect} = require("@playwright/test");

test("Handle iframes", async ({page}) =>{

    await page.goto("https://docs.oracle.com/javase/8/docs/api");

    const iFrame = page.frameLocator("//frame[@name='packageListFrame']");

    await iFrame.locator("//a[text()='java.applet']").click();

    //await page.pause(); //to show that it has redirected to the clicked link
});