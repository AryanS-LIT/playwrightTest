import { test, expect } from '@playwright/test';

test('Demo Login Test 2', async({ page }) => {

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByPlaceholder('First Name').fill('Aryan LIT');
    await page.getByPlaceholder('Last Name').fill('SSOP');
    await page.locator('textarea').fill('Dark Hell 1234');
    await page.locator('input[type="email"]').fill('abc12345@gmail.com');
    await page.locator('input[type="tel"]').fill('4655665676');
    await page.getByLabel('Male', { exact: true }).check();
    await page.locator('#msdd').click();
    await page.getByText('English').click();
    await page.locator('#Skills').selectOption('MySQL');
    await page.waitForSelector('#countries', { state: 'visible' });
    await page.locator('#countries').click();
    await page.locator('input[type="search"]').fill('india');
    await page.locator('#yearbox').selectOption('1996');
    await page.locator('#basicBootstrapForm div').filter({ hasText: 'Date Of Birth year' }).getByRole('combobox').nth(1).selectOption('September');
    await page.locator('#daybox').selectOption('23');
    await page.locator('#firstpassword').fill('123456');
    await page.locator('#secondpassword').fill('123456'); 
    await page.pause();
    

})