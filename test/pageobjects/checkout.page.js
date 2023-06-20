
class CheckoutPage {

    get inputFirstname () {
        return $('#first-name');
    }

    get inputLastname () {
        return $('#last-name');
    }

    get inputPostalCode () {
        return $("#postal-code");
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
        return $("#checkout_complete_container > h2");
    }

    get backHomeBtn () {
        return $("#back-to-products");
    }

    async firstnameForm (firstname) {
        await this.inputFirstname.setValue(firstname);
    }
    
    async lastnameForm (lastname) {
        await this.inputLastname.setValue(lastname);
    }

    async postalCodeForm (postalcode) {
        await this.inputPostalCode.setValue(postalcode);
    }

    async continueCheckout () {
        await this.continueBtn.click();
    }

    async finishBuy () {
        await this.finishBtn.click();
    }

    async backToHome () {
        await this.backHomeBtn.click();
    }

};


export default new CheckoutPage();