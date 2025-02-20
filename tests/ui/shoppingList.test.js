const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/shopping-list`);
    const list = await page.waitForSelector('ul');
    expect(list).toBeTruthy();
});
