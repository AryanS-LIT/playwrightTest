import { test, expect } from '@playwright/test';

test('Demo Login Test 3', async({ page }) => {

    await page.goto('https://www.flipkart.com/account/login?ret=/');
    await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('ab12@gmail.com');
    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.locator('form').filter({ hasText: 'Enter Mobile numberBy' }).getByRole('textbox').fill('8774767496');
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.pause();

})
