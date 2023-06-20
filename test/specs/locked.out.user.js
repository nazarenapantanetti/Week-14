import LoginPage from "../pageobjects/login.page";


describe ("Login page", () => {
    beforeAll("Open browser", () => {
        browser.url("https://www.saucedemo.com/");
        browser.setWindowSize(1366,768);
    });

    it ("Testing login components", async () => {

        await expect(LoginPage.loginPageTitle).toHaveTextContaining("Swag Labs");
        await expect(LoginPage.inputUsername).toBeDisplayed();
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.loginBtn).toBeDisplayed();

    });

    it ("Login locked out user", async () => {

        await LoginPage.login ("locked_out_user", "secret_sauce");
        await LoginPage.loginBtnClick();
        await expect(LoginPage.errorToast).toBeDisplayed();
        await expect(LoginPage.errorToast).toHaveTextContaining("Epic sadface: Sorry, this user has been locked out.");
        
    });
});