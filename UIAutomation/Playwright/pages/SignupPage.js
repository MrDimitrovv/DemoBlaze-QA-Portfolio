class SignupPage {
    constructor(page) {
        this.page = page;

        this.usernameField = page.locator('#sign-username');
        this.passwordField = page.locator('#sign-password');
        this.signupModal = page.locator('#signInModal');
        this.signupSubmitButton = page.locator('#signInModal .btn-primary');
        
    }

    async signup(username, password) {
        const { expect } = require('@playwright/test');
        await expect(this.signupModal).toBeVisible();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.signupSubmitButton.click();
    }
}

module.exports = { SignupPage };