class FrontHomePage
{
    get SignInLink() {return $("//a[@class='login']")}

    // Action Methods
    async clickSignInLink()
    {
        await (await this.SignInLink).waitForClickable()
        await this.SignInLink.click()
        
    }
}

module.exports = new FrontHomePage()