const { test, expect } = require('@playwright/test');

test('Check header', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`); 
    const homeLink = await page.waitForSelector('h1');
    const text = await homeLink.textContent();
    expect(text).toBe('My Shopping List');
});
