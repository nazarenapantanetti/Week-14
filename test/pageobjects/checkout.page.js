const Page = require('./page');

class CheckoutPage extends Page {

    get inputFirstname () {
        return $('#first-name');
    }

    get inputLastname () {
        return $('#last-name');
    }

    get inputPostalCode () {
        return $("postal-code");
    }

    get cancelBtn () {
        return $('#cancel');
    }

    get continueBtn () {
        return $('#continue');
    }

    get finishBtn () {
        return $('#finish');
    }

    get finalMessage () {
        return $("complete-header");
    }

    get backHomeBtn () {
        return $("back-to-products");
    }
};


module.exports = new CheckoutPage();