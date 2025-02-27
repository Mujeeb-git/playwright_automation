import { test, expect } from "../fixtures/authFixture" ; // ✅ Import the custom fixture

test('Check Dashboard Access', async ({ authPage }) => {
  await authPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // ✅ Now 'authPage' is available
  expect(await authPage.title()).toContain('index');
});