
class Registration_MercuryTours
{
    get firstName() {return $("//input[@name='firstName']")}
    get LastName() {return $("//input[@name='lastName']")}
    get Country() {return $("//select[@name='country']")}
    get userName() {return $("//input[@id='email']")}
    get PassWord() {return $("//input[@name='password']")}
    get ConfirmPassword() {return $("//input[@name='confirmPassword']")}
    get SubmitButn() {return $("//input[@name='submit']")}

    // Develop action methods
    async registerUserMercuryTours(fn, ln, country, un, pass, confpass)
    {
        await this.SubmitButn.waitForClickable()
        await this.firstName.sendKeys(fn)
        await this.LastName.sendKeys(ln)
        await this.Country.selectByVisibleText(country)
        await this.userName.sendKeys(un)
        await this.PassWord.sendKeys(pass)
        await this.ConfirmPassword.sendKeys(confpass)
        await this.SubmitButn.click()
    }
} 