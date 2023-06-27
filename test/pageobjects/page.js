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

    get twitterIcon () {
        return $('#page_wrapper > footer > ul > li.social_twitter > a');
    }

    get facebookIcon () {
        return $('#page_wrapper > footer > ul > li.social_facebook > a');
    }

    get linkedinIcon () {
        return $('#page_wrapper > footer > ul > li.social_linkedin > a');
    }
   
    get copyright () {
        return $("#page_wrapper > footer > div");
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

    get productSortContainer () {
        return $("#header_container > div.header_secondary_container > div > span > select");
    }

    get optionHighToLowPrice () {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(4)");
    }

    get optionAToZ() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(1)");
    }

    get firstProductList () {
        return $ ("#inventory_container > div > div:nth-child(1)");
    }

    get firstPriceList () {
        return $ ("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div");
    }

    get firstNameList () {
        return $ ("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label");
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
    
    async render () {
        await Promise.all([
            this.burgerMenu.waitForDisplayed(),
            this.mainPageTitle.waitForDisplayed(),
            this.cartIcon.waitForDisplayed(),
            this.backpackImage.waitForDisplayed(),
            this.backpackName.waitForDisplayed(),
            this.backpackDescription.waitForDisplayed(),
            this.backpackPrice.waitForDisplayed(),
            this.backpackAddToCartBtn.waitForDisplayed(),
            this.twitterIcon.waitForDisplayed(),
            this.facebookIcon.waitForDisplayed(),
            this.linkedinIcon.waitForDisplayed(),
            this.copyright.waitForDisplayed(),
        ]);
    }

    async visualizeProductOrderOptions () {
        await this.productSortContainer.click();
    }

    async selectHighToLowPriceOption () {
        await this.optionHighToLowPrice.click();
    }

    async clickOnTwitterIcon () {
        await this.twitterIcon.click();
    }

    async goToTwitter () {
        await this.browser.switchWindow('twitter.com/saucelabs');
    }

    async clickOnFacebookIcon () {
        await this.facebookIcon.click();
    }

    async clickOnLinkedinIcon () {
        await this.linkedinIcon.click();
    }

    async selectAToZOption () {
        await this.optionAToZ.click();
    }
    
}
export default new Page();