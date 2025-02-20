const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/add-product`);

    const formInput = await page.waitForSelector('input');
    expect(formInput).toBeTruthy();
});
