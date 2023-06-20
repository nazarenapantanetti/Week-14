import LoginPage from "../pageobjects/login.page";
import Page from "../pageobjects/page";
import CartPage from "../pageobjects/cart.page";
import CheckoutPage from "../pageobjects/checkout.page";
import LogoutPage from "../pageobjects/logout.page";


describe ("Login standard user", () => {
    beforeAll("Open browser", () => {
        browser.setWindowSize(1366,768);
        browser.url("https://www.saucedemo.com/");
     });

    it ("Try login without enter username and password", async () => {
        await LoginPage.loginBtnClick();
        await expect(LoginPage.errorToast).toBeDisplayed();
        await expect(LoginPage.errorToast).toHaveTextContaining("Epic sadface: Username is required");
    });

    it ("Try login with wrong username", async () => {
        await LoginPage.login ("standard_user1", "secret_sauce");
        await LoginPage.loginBtnClick();
        await expect(LoginPage.errorToast).toBeDisplayed();
        await expect(LoginPage.errorToast).toHaveTextContaining("Epic sadface: Username and password do not match any user in this service");
    });

    it ("Try login with wrong password", async () => {
        await LoginPage.login ("standard_user", "secret_sauce1");
        await LoginPage.loginBtnClick();
        await expect(LoginPage.errorToast).toBeDisplayed();
        await expect(LoginPage.errorToast).toHaveTextContaining("Epic sadface: Username and password do not match any user in this service");
    });

    it ("Standard user successfully login", async () => {
        await LoginPage.login ("standard_user", "secret_sauce");
        await LoginPage.loginBtnClick();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
  
});

describe ("Testing page content", () => { 

    it ("components", async () => {

    await expect(Page.mainPageTitle).toExist();
    await expect(Page.mainPageTitle).toHaveTextContaining("Swag Labs");
    await expect(Page.burgerMenu).toBeClickable();
    await expect(Page.cartIcon).toBeDisplayed();
    });

    it ("Testing for product's information", async () => {
       
        await expect(Page.backpackImage).toHaveAttribute("src","/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
        await expect(Page.backpackName).toBeDisplayed();
        await expect(Page.backpackDescription).toBeDisplayed();
        await expect(Page.backpackPrice).toBeDisplayed();
    });
});

describe ("Shopping flow", () => { 

    it ("Adding items to the cart", async () => {
        await Page.buyItems();
        await Page.goToCart();
        await CartPage.removeBikeItem();
        await CartPage.continueShopping();
        await Page.removeOnesieItem();
        await Page.goToCart();
    });

    it ("Start checkout filling form", async () => {
        await Page.scrollDown();
        await CartPage.checkout();
        await CheckoutPage.firstnameForm("Susana");
        await CheckoutPage.lastnameForm("Gimenez");
        await CheckoutPage.postalCodeForm("2000");
        await CheckoutPage.continueCheckout();
    });

    it ("Complete checkout", async () => {
        await CheckoutPage.finishBuy();
        await expect(CheckoutPage.finalMessage).toBeDisplayed();
        expect(CheckoutPage.finalMessage).toHaveTextContaining("Thank you for your order!");
        await CheckoutPage.backToHome();
    });

    it ("Logout", async () => {
        await Page.burgerMenuClick();
        await LogoutPage.logout();  
    });

});