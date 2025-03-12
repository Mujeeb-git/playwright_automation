const { test, expect } = require("@playwright/test")

//we can give view port for a particular test which will override global viewport
test.use({ viewport: { width: 1000, height: 700 } });

test("Valid login", async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //here added optional - delay time just to demonstrate but not required
    await page.getByPlaceholder("Username").fill("Admin", 200);

    await page.locator("input[name='password']").fill("admin123", 300);

    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click();

    await page.getByText("Logout").click();

    //waiting for 3 seconds but not required, this is just for demo
    //await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/login/).catch((error) => {
        console.error('Error caught:', error.message);
    });

});