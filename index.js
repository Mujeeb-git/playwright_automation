const dotenv = require("dotenv");
var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber_report.json',
        output: 'reports/cucumber_report_bootstrap.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        columnLayout: 1, //this is for the scenario to display in one column
        metadata: {
            // "App Version":"0.3.2",
            // "Test Environment": "STAGING",
            // "Browser": "Chrome  54.0.2840.98",
            // "Platform": "Windows 10",
            // "Parallel": "Scenarios",
            // "Executed": "Remote"
        },
        failedSummaryReport: true,
    };

    function generateHtml(){
        dotenv.config({
            path: `${process.cwd()}/config/.env.${process.env.ENV}`
        });

    options.metadata.Browser=process.env.browser;
    options.metadata.app_url = process.env.app_url;
    reporter.generate(options);
    
    }

    generateHtml();

    //more info on `metadata` is available in `options` section below.

    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.


    // run tests like: npx cross-env browser=chrome; npx cucumber-js;  node index.js