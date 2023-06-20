
import LoginPage from "../pageobjects/login.page";
import Page from "../pageobjects/page";
import CartPage from "../pageobjects/cart.page";

beforeAll("Open browser", () => {
    browser.url("https://www.saucedemo.com/");
    browser.setWindowSize(1366,768);
 })

describe ("Login standard user", () => {

    it ("Try login without enter username and password", async () => {
        await LoginPage.clickLoginBtn();
        await expect(LoginPage.errorToast).toBeDisplayed().toHaveTextContaning("Epic sadface: Username is required");
    });

    it ("Try login with wrong username", async () => {
        await LoginPage.login ("standard_user1", "secret_sauce");
        await LoginPage.clickLoginBtn();
        await expect(LoginPage.errorToast).toBeDisplayed().toHaveTextContaning("Epic sadface: Username and password do not match any user in this service");
    });

    it ("Try login with wrong password", async () => {
        await LoginPage.login ("standard_user", "secret_sauce1");
        await LoginPage.clickLoginBtn();
        await expect(LoginPage.errorToast).toBeDisplayed().toHaveTextContaning("Epic sadface: Username and password do not match any user in this service");
    });

    it ("Standard user successfully login", async () => {
        await LoginPage.login ("standard_user", "secret_sauce");
        await LoginPage.clickLoginBtn();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/inventory.html");
    });
  
});

describe ("Testing page content", async () => { 

    await expect(Page.mainPageTitle).toBeDisplayed().toHaveTextContaning("Swag Labs");
    await expect(Page.burgerMenu).toBeDisplayed().toBeClickable();
    await expect(Page.closeBurgerMenuBtn).toBeDisplayed().toBeClickable();
    await expect(Page.cartIcon).toBeDisplayed();
});

describe ("Shopping a backpack", () => { 

    it ("Testing for product's information", async () => {
       
        await expect(Page.backpackImage).toBeDisplayed();
        await expect(Page.backpackName).toBeDisplayed();
        await expect(Page.backpackDescription).toBeDisplayed();
        await expect(Page.backpackPrice).toBeDisplayed();
    });

    it ("Shopping the backpack", async () => {
        await expect(Page.backpackAddToCartBtn).toBeDisplayed();
        await Page.backpackAddToCartBtn.click();
        await expect(Cart.backpackRemoveBtn).toBeDisplayed();
    });

    it ("Cart Accions", async () => {
        await Page.cartIcon.click();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/cart.html");
        await continueShoppingBtn.click();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/inventory.html");
        await Page.cartIcon.click();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/cart.html");
       
    });

    it ("Checkout part one", async () => {
        await CartPage.checkoutBtn.click();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/checkout-step-one.html");
        await continueShoppingBtn.click();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/inventory.html");
        await Page.cartIcon.click();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/cart.html");
        await CartPage.checkoutBtn.click();
        await expect(browser.url).toBeEqual("https://www.saucedemo.com/checkout-step-one.html");
    });

});