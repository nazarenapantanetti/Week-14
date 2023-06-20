const Page = require('./page');

class CartPage extends Page {

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
};

module.exports = new CartPage();