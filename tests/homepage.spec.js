const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page/HomePage');

test('basic test', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.openUrl();
    await homePage.getStarted();

    await expect(page).toHaveTitle('Grover – Help Center')
});