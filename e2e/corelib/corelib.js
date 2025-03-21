
const { Before, After, setDefaultTimeout, BeforeAll, AfterAll, BeforeStep, AfterStep, Status } = require("@cucumber/cucumber");
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
    console.log("Environment:", process.env.ENV);
    //take environment name from the command line argument 
    //run in commonJS --> $env:ENV="stage"; npx cucumber-js
    //run in Typescript( --env=stage)
    dotenv.config({
        //path: `${process.cwd()}/config/.env.${process.env.npm_config_env}` // --> in typescript
        path: `${process.cwd()}/config/.env.${process.env.ENV}`
    });
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

Before(async function (scenario) { //for every scenario
    this.attach(`----------------------Scenario: ${scenario.pickle.name} : is started----------------------`);
    bCtx = await browser.newContext({
        viewport: null,
        javaScriptEnabled: true
    });
    page = await bCtx.newPage();
    setPage(page); // Store the page object

    await page.goto(process.env.app_url);

});

After(async function (scenario) { //after each Scenario

    this.attach(`----------------------Scenario: ${scenario.pickle.name} : is ended----------------------`);
    this.attach(`>>>>>>>>>>>>>>> SCENARIO STATUS: ${scenario.result?.status} >>>>>>>>>>>>>>>>>>>`);

    //attach screenshot to the report on failure
    if (scenario.result?.status == Status.FAILED) {
        this.attach(`Take screenshot for the failure here`);
        const image = await page.screenshot({
            path: `./reports/${scenario.pickle.name}.png`
        });
        this.attach(image,'image/png');
    }

    //attach a file to the report
    const obj = {
        fname:'test1',
        lname:'test2',
        zipcode:5234234
    };
    this.attach(JSON.stringify(obj),"application/json");



    await page.close();
    await bCtx.close();
});

BeforeStep(async function (scenario) { //before each step
    this.attach(`----------------------Step: ${scenario.pickleStep.text} : is started----------------------`);
});

AfterStep(async function (scenario) { //after each step

    this.attach(`----------------------Step: ${scenario.pickleStep.text} : is ended----------------------`);
});

AfterAll(async function () {
    await browser.close();
});



module.exports = getPage;