const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);  
    const footer = await page.waitForSelector('footer');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps regular exam');
});
