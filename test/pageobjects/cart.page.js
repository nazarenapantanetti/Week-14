class CartPage {

    get cartPageTitle () {
        return $('.login_logo')
    }

    get continueShoppingBtn () {
        return $("#continue-shopping")
    }

    get checkoutBtn () {
        return $("#checkout")
    }
    
    get backpackRemoveBtn () {
        return $("#remove-sauce-labs-backpack")
    }

    get bikeRemoveBtn () {
        return $("#remove-sauce-labs-bike-light")
    }

    async removeBikeItem () {
        await this.bikeRemoveBtn.click();
    }

    async continueShopping () {
        await this.continueShoppingBtn.click();
    }

    async checkout () {
        await this.checkoutBtn.click();
    }
};

export default new CartPage();