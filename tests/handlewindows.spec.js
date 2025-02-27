const { test, expect } = require("@playwright/test");

test("Verify multiple tab navigation", async ({ browser }) => {

    const context = await browser.newContext();

    //page is like a window/page in the browser context
    const page = await context.newPage();

    //open browser page with an application
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    //wait for the promises mentioned in the below array to be resolved
    //here newPage represents new window
    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"), // this will resolve the promise ( as return)
            page.locator("(//a[contains(@href,'facebook')])[1]").click()
        ]

    );

    //here we have new window/page variable and we can perform actions on the locator of new page
    await newPage.locator("//span[contains(text(),'Email address or phone number')]/following-sibling::input").fill("TestUserName");

    //lets try to type in first page locator and it will work
    await page.locator("input#email1").fill("TestEmail1@email.com");

    await newPage.close(); //closing new page

    await page.locator("input#email1").fill("TestEmail1@email.com");

    context.close(); //close the context after using






});