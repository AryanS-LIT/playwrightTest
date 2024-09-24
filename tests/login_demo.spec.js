import { test, expect } from '@playwright/test';

test('Demo Login Test 1', async({ page }) => {

     await page.goto('https://demo.applitools.com/');
     await page.locator('[placeholder="Enter your username"]').fill('Aryan');
     await page.locator('[placeholder="Enter your password"]').fill('123ABC');
     await page.locator('text=sign in').click();
     await page.pause(); //this will pause the test execution
});