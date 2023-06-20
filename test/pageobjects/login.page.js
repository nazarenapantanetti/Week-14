

const Page = require('./page');

class LoginPage extends Page {

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
        return $(".h3");
    }

    async loginBtnClick () {
        await this.btnLogin.click();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }
}

module.exports = new LoginPage();
