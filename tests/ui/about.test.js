const { test, expect } = require('@playwright/test');

test('Log baseURL', async ({ baseURL }) => {
  console.log('Base URL is:', baseURL); // This will print the correct URL
});

test('Check about page', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/about`); 

  const heading = await page.waitForSelector('h1'); 
  const text = await heading.textContent();
  expect(text).toBe('About');
});

test('Check about page test', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/about`); 

  const paragraph = await page.waitForSelector('p'); 
  const text = await paragraph.textContent();
  expect(text).toBe('This is the Regular exam for Software Engineering and DevOps course @ SoftUni');
});
