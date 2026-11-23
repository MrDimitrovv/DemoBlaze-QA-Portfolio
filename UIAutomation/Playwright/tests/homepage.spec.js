const {test, expect} = require('@playwright/test');

test('TC_UI_001 - Verify homepage loads successfully', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    await expect(page).toHaveTitle(/STORE/);

    await expect(page.locator('#login2')).toBeVisible();
    await expect(page.locator('#signin2')).toBeVisible();
    await expect(page.locator('#cartur')).toBeVisible();
});