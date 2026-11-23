class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameField = page.locator('#loginusername');
        this.passwordField = page.locator('#loginpassword');
        this.loginModal = page.locator('#logInModal');

        this.loginSubmitButton = page.locator('#logInModal .btn-primary');
    }

    async login(username, password) {
        const { expect } = require('@playwright/test');
        await expect(this.loginModal).toBeVisible();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await expect(this.loginModal).toBeVisible();
        await this.loginSubmitButton.click();
    }
}

module.exports = { LoginPage };