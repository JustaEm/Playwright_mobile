//Bypass hidden dropdown element in Mobile view:

import { test, expect} from '@playwright/test'

test('Demo login', async ({ page }) => {

    //Using Inspector / CodeGen tool:
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    //await page.locator('.oxd-userdropdown-name').click(); --> this is problematic UI element not visible in mobile, bypass by:
    const elementHandle = await page.locator('.oxd-userdropdown-name');
    await elementHandle.evaluate((node) => node.click());

    await page.getByRole('menuitem', { name: 'Logout' }).click();

});