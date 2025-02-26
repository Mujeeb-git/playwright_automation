import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Test 20 Nguyen').click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Test 20 Nguyen' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});