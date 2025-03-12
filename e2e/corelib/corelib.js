
const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

setDefaultTimeout(60 * 1000);

let browser;
let bCtx;
let page;

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
    this.page = page;
});

After(async function () {
    await page.close();
    await bCtx.close();
    await browser.close();
});

module.exports = {page};