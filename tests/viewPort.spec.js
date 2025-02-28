const {test, expect} = require("@playwright/test");

test.use({viewport: {
    width: 393,
    height: 852
}});

test("View Port of the screen", async ({page}) => {

    
    await page.goto("https://www.google.com/");

    console.log(`The width of the current view port is : ${page.viewportSize().width}`)
    console.log(`The height of the current view port is : ${page.viewportSize().height}`)

    
    console.log(`The role attribute of the Search locator: ${await page.getAttribute("//textarea[@title='Search']","role")}`);


        await page.pause();


});