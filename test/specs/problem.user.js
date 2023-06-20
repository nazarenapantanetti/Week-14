
import LoginPage from "../pageobjects/login.page";
import Page from "../pageobjects/page";
import CartPage from "../pageobjects/cart.page";
import CheckoutPage from "../pageobjects/checkout.page";
import LogoutPage from "../pageobjects/logout.page"


describe ("Problem user", () => {
    beforeAll("Open browser", () => {
        browser.setWindowSize(1366,768);
        browser.url("https://www.saucedemo.com/");
     });

    it ("Problem user successfully login", async () => {
        await LoginPage.login ("problem_user", "secret_sauce");
        await LoginPage.loginBtnClick();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });

    it ("testing components", async () => {
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

    it ("Adding items to the cart", async () => {
        await Page.backpackImage.toHaveAttribute("src","/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
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
