class LogoutPage {
    
    get logoutBtn () {
        return $("#logout_sidebar_link");
    }

    async logout () {
        await this.logoutBtn.click();
    }
}

export default new LogoutPage();