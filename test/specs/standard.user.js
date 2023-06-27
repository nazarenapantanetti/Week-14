import LoginPage from "../pageobjects/login.page";
import Page from "../pageobjects/page";
import CartPage from "../pageobjects/cart.page";
import CheckoutPage from "../pageobjects/checkout.page";
import LogoutPage from "../pageobjects/logout.page";


describe ("Standard user", () => {

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

    it ("Testing page content: components", async () => {
        await expect(Page.mainPageTitle).toExist();
        await expect(Page.mainPageTitle).toHaveTextContaining("Swag Labs");
        await expect(Page.burgerMenu).toBeClickable();
        await expect(Page.cartIcon).toBeDisplayed();
    });
    
    it ("Order items by price: From highest to lowest", async () => {
        await Page.visualizeProductOrderOptions();
        await Page.selectHighToLowPriceOption();
        await expect(Page.firstProductList).toBeDisplayed();
        await expect(Page.firstPriceList).toHaveTextContaining("49.99");
    });

    it ("Order items by alphabet: From A to Z", async () => {
        await Page.visualizeProductOrderOptions();
        await Page.selectAToZOption();
        await expect(Page.firstProductList).toBeDisplayed();
        await expect(Page.firstNameList).toHaveTextContaining("Sauce Labs Backpack");
    });
    
    it ("Testing for product's information", async () => {   
        await expect(Page.backpackImage).toHaveAttribute("src","/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
        await expect(Page.backpackName).toBeDisplayed();
        await expect(Page.backpackDescription).toBeDisplayed();
        await expect(Page.backpackPrice).toBeDisplayed();
    });

    it ("Shopping flow: Adding items to the cart", async () => {
        await Page.buyItems();
        await Page.goToCart();
        await CartPage.removeBikeItem();
        await CartPage.continueShopping();
        await Page.removeOnesieItem();
        await Page.goToCart();
    });

    it ("Shopping flow: Start checkout filling form", async () => {
        await Page.scrollDown();
        await expect(CartPage.checkoutBtn).toBeDisplayed();
        await CartPage.checkout();
        await CheckoutPage.firstnameForm("Susana");
        await CheckoutPage.lastnameForm("Gimenez");
        await CheckoutPage.postalCodeForm("2000");
        await expect(CheckoutPage.continueBtn).toBeDisplayed();
        await CheckoutPage.continueCheckout();
    });

    it ("Shopping flow: Complete checkout", async () => {
        await expect(CheckoutPage.finishBtn).toBeDisplayed();
        await CheckoutPage.finishBuy();
        await expect(CheckoutPage.finalMessage).toBeDisplayed();
        await expect(CheckoutPage.finalMessage).toHaveTextContaining("Thank you for your order!");
        await CheckoutPage.backToHome();
    });

    it ("Going to Twitter", async () => {
        await Page.scrollDown();
        await Page.clickOnTwitterIcon();
        await browser.switchWindow('https://twitter.com/saucelabs');
        await expect(browser).toHaveUrlContaining("https://twitter.com/saucelabs");
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
    });

    it ("Going to Facebook", async () => { 
        await Page.scrollDown();
        await Page.clickOnFacebookIcon();
        await browser.switchWindow('https://www.facebook.com/saucelabs');
        await expect(browser).toHaveUrlContaining("https://www.facebook.com/saucelabs");
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
    });

    it ("Going to LinkedIn", async () => {
        await Page.scrollDown();
        await Page.clickOnLinkedinIcon();
        await browser.switchWindow('https://www.linkedin.com/company/sauce-labs/');
        await expect(browser).toHaveUrlContaining("https://www.linkedin.com/company/sauce-labs/");
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
    });

    it ("Logout", async () => {  
        await Page.burgerMenuClick();
        await LogoutPage.logout();  
        await expect(browser).toHaveUrlContaining('https://www.saucedemo.com/');
    });
});



