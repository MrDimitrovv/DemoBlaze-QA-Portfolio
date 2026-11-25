const {test, expect } = require('@playwright/test');
const {HomePage } = require('../pages/HomePage');
const {SignupPage } = require('../pages/SignupPage');

test('TC_UI_007 - Signup modal opens successfully', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    await homePage.navigate();
    await homePage.openSignUp();

    await expect(signupPage.signupModal).toBeVisible();

});

test('TC_UI_008 - Verify signup with valid credentials', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);
    const dialogPromise = page.waitForEvent('dialog');
    const username = `QA_Profile_${Date.now()}`;
    const password = 'test1234';

    await homePage.navigate();
    await homePage.openSignUp();

    await signupPage.signup(username, password);

    const dialog = await dialogPromise;

    expect(dialog.message()).toBe('Sign up successful.');

    await dialog.accept();

    await expect(page).toHaveURL('https://www.demoblaze.com/');

});

test('TC_UI_009 - Verify signup with existing credentials', async ({ page }) => {

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);
    const dialogPromise = page.waitForEvent('dialog');
    const username = 'mrdimitrov1234';
    const password = 'test1234';

    await homePage.navigate();
    await homePage.openSignUp();

    await signupPage.signup(username, password);

    const dialog = await dialogPromise;

    expect(dialog.message()).toBe('This user already exist.');

    await dialog.accept();

    await expect(page).toHaveURL('https://www.demoblaze.com/');

});