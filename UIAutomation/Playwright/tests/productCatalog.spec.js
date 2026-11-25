const {test, expect} = require('@playwright/test');
const {HomePage } = require('../pages/HomePage');

test ('TC_UI_010 - Verify product categories are displayed', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();

    const categories = await page.locator('.list-group-item').allTextContents();

    expect(categories).toEqual(['CATEGORIES', 'Phones', 'Laptops', 'Monitors']);
});

test ('TC_UI_011 - Verify category selection displays relevant products', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();

    await page.getByRole('link', { name: 'Phones' }).click();

    const products = page.locator('.card-title');

await expect(products.first()).toBeVisible();

const productNames = await products.allTextContents();

expect(productNames).toEqual(expect.arrayContaining([
    'Samsung galaxy s6',
    'Nokia lumia 1520',
    'Nexus 6',
    'Samsung galaxy s7',
    'Iphone 6 32gb',
    'Sony xperia z5',
    'HTC One M9'
]));
});

test ('TC_UI_012 - Verify product details page displays correct information', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate();
    await page.getByRole('link', { name: 'Iphone 6 32gb' }).click();

    const productName = await page.locator('.name').textContent();
    const productPrice = await page.locator('.price-container').textContent();
    const productDescription = await page.locator('#more-information').textContent();

    expect(productName).toBe('Iphone 6 32gb');
    expect(productPrice).toContain('$790');
    expect(productDescription).toBeTruthy();
});


