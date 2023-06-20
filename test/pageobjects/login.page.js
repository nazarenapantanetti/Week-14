class LoginPage {

    get loginPageTitle () {
        return $('.login_logo')
    }
 
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginBtn () {
        return $('#login-button');
    }

    get errorToast () {
        return $("#login_button_container > div > form > div.error-message-container.error > h3");
    }

    async loginBtnClick () {
        await this.loginBtn.click();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }
}

export default new LoginPage();
