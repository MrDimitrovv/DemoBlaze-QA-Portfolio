const {test, expect} = require('@playwright/test');
const {HomePage } = require('../pages/HomePage');

test ('TC_UI_013 - Verify adding product to cart', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('link', { name: 'Iphone 6 32gb' }).click();

    const dialogPromise = page.waitForEvent('dialog');

    await page.getByRole('link', { name: 'Add to cart' }).click();

    const dialog = await dialogPromise;

    expect(dialog.message()).toBe('Product added');

    await dialog.accept();

    await homePage.openCart();

    const cartProductName = await page.locator('.success td:nth-child(2)').textContent();
    const cartProductPrice = await page.locator('.success td:nth-child(3)').textContent();

    expect(cartProductName).toBe('Iphone 6 32gb');
    expect(cartProductPrice).toBe('790');
});

test ('TC_UI_014 - Verify removing product from cart', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('link', { name: 'Samsung galaxy s7' }).click();

    const dialogPromise = page.waitForEvent('dialog');

    await page.getByRole('link', { name: 'Add to cart' }).click();

    const dialog = await dialogPromise;

    expect(dialog.message()).toBe('Product added');

    await dialog.accept();
    await homePage.openCart();

    await page.getByRole('link', { name: 'Delete' }).click();

    await expect(page.locator('.success td:nth-child(2)')).toHaveCount(0);

});

test ('TC_UI_015 - Verify cart total price calculation', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('link', { name: 'Nokia lumia 1520' }).click();
    await page.getByRole('link', { name: 'Add to cart' }).click();

    const dialogPromise1 = page.waitForEvent('dialog');
    const dialog1 = await dialogPromise1;
    expect(dialog1.message()).toBe('Product added');
    await dialog1.accept();

    await homePage.navigate();

    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    await page.getByRole('link', { name: 'Add to cart' }).click();

    const dialogPromise2 = page.waitForEvent('dialog');
    const dialog2 = await dialogPromise2;
    expect(dialog2.message()).toBe('Product added');
    await dialog2.accept();

    await homePage.openCart();
    
    await expect(page.locator('.success')).toHaveCount(2);
    const totalPrice = page.locator('#totalp');
    await expect(totalPrice).toHaveText('1180'); // 820 + 360
});