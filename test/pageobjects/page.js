
module.exports = class Page {

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get closeBurgerMenuBtn () {
        return $("#react-burger-cross-btn")
    }
    
    get mainPageTitle () {
        return $(".app_logo");
    }

    get cartIcon () {
        return $('.shopping_cart_link');
    }

    get backpackImage () {
        return $('.inventory_item_img');
    }

    get backpackName () {
        return $('.inventory_item_name');
    }

    get backpackDescription () {
        return $('.inventory_item_desc');
    }
   
    get backpackPrice () {
        return $(".inventory_item_price");
    }

    get backpackAddToCartBtn () {
        return $("#add-to-cart-sauce-labs-backpack");
    }

}
