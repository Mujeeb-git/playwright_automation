
const { expect } = require("@playwright/test")
const homepageloc = require("../locators/homepagelocators.json");
const BasePage = require("../pages/basepage");
class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    async verifyHomePageDisplayed() {
        console.log("Verifying Home page is displayed");
        console.log(await this.page.locator(homepageloc.myAccountLabel.locator).textContent());
        expect(this.page.locator(homepageloc.myAccountlink.locator).isVisible()).toBeTruthy();
    }

    async logout() {
        await this.click(homepageloc.logoutButton);
        //can use below line using Typescript only
        // const continueBtnElementRole =  homepageloc.logoutButton.locator as "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "strong" | "subscript" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "time" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem";
        await this.click(homepageloc.continueButton, true); //true --> for ByRole


    }

}

module.exports = HomePage;

