import { test, expect } from '@playwright/test';

// test.use({
//     viewport: { width: 1280, height: 720 },
//   });

test('test', async ({ page }) => {

    await page.goto('https://codenboxautomationlab.com/registration-form/');
    await page.getByLabel('First Name *').click();
    await page.getByLabel('First Name *').fill('Justyna');
    await page.getByLabel('First Name *').press('Tab');
    await page.getByLabel('Last Name *').fill('Mulewska');
    await page.getByLabel('Last Name *').press('Tab');
    await page.getByLabel('Email *').fill('justyna.mulewska@gmail.com');
    await page.getByLabel('Select the Course you would').selectOption('web-services-api');
    //await page.getByText('Kijiji').click();
    await page.locator('#nf-label-class-field-23-2').click();
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByText('Your registration is')).toContainText('Your registration is');
    //await page.waitForLoadState();

});