class HomePage {
    constructor(page) {
        this.page = page;

        this.loginButton = page.locator('#login2');
        this.signUpButton = page.locator('#signin2');
        this.cartButton = page.locator('#cartur');
        this.aboutUsLink = page.getByRole('link', { name: 'About us' });
        this.contactLink = page.getByRole('link', { name: 'Contact' });
        this.welcomeMessage = page.locator('#nameofuser');
    }

    async navigate() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async openLogin() {
        await this.loginButton.click();
    }

    async openSignUp() {
        await this.signUpButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }
    async openAboutUs() {
        await this.aboutUsLink.click();
    }
    async openContact() {
        await this.contactLink.click();
    }
}

module.exports = { HomePage };
