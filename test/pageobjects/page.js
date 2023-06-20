class Page {

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get closeBurgerMenuBtn () {
        return $("#react-burger-cross-btn")
    }
    
    get mainPageTitle () {
        return $("#header_container > div.primary_header > div.header_label > div");
    }

    get cartIcon () {
        return $('.shopping_cart_link');
    }

    get backpackImage () {
        return $('#item_4_img_link > img');
    }

    get backpackName () {
        return $('#item_4_title_link > div');
    }

    get backpackDescription () {
        return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div');
    }
   
    get backpackPrice () {
        return $("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div");
    }

    get backpackAddToCartBtn () {
        return $("#add-to-cart-sauce-labs-backpack");
    }

    get bikeImage () {
        return $('#item_0_img_link > img');
    }

    get bikeName () {
        return $('#item_0_title_link > div');
    }

    get bikeDescription () {
        return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > div');
    }
   
    get bikePrice () {
        return $("#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div");
    }

    get bikeAddToCartBtn () {
        return $("#add-to-cart-sauce-labs-bike-light");
    }

    get onesieAddToCartBtn () {
        return $("#add-to-cart-sauce-labs-onesie");
    }

    get removeOnesieBtn () {
        return $("#remove-sauce-labs-onesie");
    }

    async buyItems () {
        await this.backpackAddToCartBtn.click();
        await this.bikeAddToCartBtn.click();
        await this.onesieAddToCartBtn.click();
    }

    async goToCart () {
        await this.cartIcon.click();
    }

    async removeOnesieItem () {
        await this.removeOnesieBtn.click();
    }

    async burgerMenuClick () {
        await this.burgerMenu.click();
    }

    async scrollDown() {
        await browser.execute(() => {
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.scrollIntoView();
            };
        });
    };
    
}
export default new Page();