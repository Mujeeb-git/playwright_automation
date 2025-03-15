
class BasePage {
    page;
    constructor(page) {
        if (!page) {
            throw new Error("Page object is required and cannot be undefined!");
        }
        this.page = page;
    }

    async click(object, roleFlag = false) {
        if (!roleFlag) {
            await this.getLocator(object).click(object.actionsOptions);
        } else {
            await this.getLocatorByRole(object).click(object.actionsOptions);

        }
        console.log(`Clicked on ${object.description}`);
    }
    async enter(object, data) {
        await this.getLocator(object).fill(data, object.actionsOptions);
        console.log(`Entered value: ${data} on ${object.description}`);
    }

    getLocator(object) {
        return this.page.locator(object.locator, object.locatorOptions);
    }
    getLocatorByRole(object) {
        return this.page.getByRole(object.locator,object.locatorOptions);
    }

}

module.exports = BasePage;
