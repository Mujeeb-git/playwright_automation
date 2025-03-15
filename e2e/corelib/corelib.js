
const { Before, After, setDefaultTimeout, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const dotenv = require("dotenv")


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

BeforeAll(async function () {
    dotenv.config();
    let browserType = process.env.browser;
    switch (browserType) {
        case "gc":
        case "chrome":
            browser = await chromium.launch({
                headless: false,
                channel: "chrome",
                args: ["--start-maximized"]
            });
            break;
        case "ff":
        case "firefox":
            browser = await firefox.launch({
                headless: false,
                args: ["--start-maximized"]
            });
            break;
        case "msedge":
        case "edge":
            browser = await chromium.launch({
                headless: false,
                channel: "msedge",
                args: ["--start-maximized"]
            });
            break;
        default:
            throw new Error(`invalid browser type ${browserType} is passed, please correct it.`);
            break;
    }
});

Before(async function () { //for every scenario
    bCtx = await browser.newContext({
        viewport: null,
        javaScriptEnabled: true
    });
    page = await bCtx.newPage();
    setPage(page); // Store the page object

    await page.goto(process.env.app_url);

});

After(async function () { //after each Scenario
    await page.close();
    await bCtx.close();
});

AfterAll(async function () {
    await browser.close();
});



module.exports = getPage;