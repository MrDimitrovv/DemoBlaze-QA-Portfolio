const {test, expect } = require('@playwright/test');
const {HomePage } = require('../pages/HomePage');
const {LoginPage } = require('../pages/LoginPage');

test('TC_UI_002 - Login modal opens successfully', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.openLogin();

    await expect(loginPage.loginModal).toBeVisible();

});

test('TC_UI_003 - Login with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.openLogin();

    await loginPage.login('mrdimitrov1234', 'test1234');

    await expect(homePage.welcomeMessage).toHaveText('Welcome mrdimitrov1234');

    });

    test('TC_UI_004 - Login with invalid credentials', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const dialogPromise = page.waitForEvent('dialog');

    await homePage.navigate();
    await homePage.openLogin();

    await loginPage.login('invalidUser99', 'invalidPass99');

    const dialog = await dialogPromise;

    expect(dialog.message()).toBe('User does not exist.');

    await dialog.accept();

});

test('TC_UI_005 - Login with empty credentials', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.openLogin();

    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Please fill out Username and Password.');
        await dialog.accept();
    });

    await loginPage.login('', '');
});

test('TC_UI_006 - Verify logout functionality', async ({ page }) => {

   const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.openLogin();

    await loginPage.login('mrdimitrov1234', 'test1234');

    await expect(homePage.logoutButton).toBeVisible();

    await homePage.logoutButton.click();

    await expect(homePage.loginButton).toBeVisible();
});