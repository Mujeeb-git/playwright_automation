
const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");


let browser;
let bCtx;
let page;
let sharedContext = {};
setDefaultTimeout(60 * 1000);

function setPage(page) {
    sharedContext.page = page; // Store the page object
}

function getPage() {
    return sharedContext.page; // Access the stored page object
}
Before(async function () {
    browser = await chromium.launch({
        headless: false,
        channel: "chrome",
        args: ["--start-maximized"]
    });
    bCtx = await browser.newContext({
        viewport: null,
        javaScriptEnabled: true
    });
    page = await bCtx.newPage();
    setPage(page); // Store the page object
});

After(async function () {
    await page.close();
    await bCtx.close();
    await browser.close();
});



module.exports = getPage;