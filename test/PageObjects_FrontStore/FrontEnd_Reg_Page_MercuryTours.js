
class Registration_MercuryTours
{
    get firstName() {return $("//input[@name='firstName']")}
    get LastName() {return $("//input[@name='lastName']")}
    get Country() {return $("//select[@name='country']")}
    get userName() {return $("//input[@id='email']")}
    get PassWord() {return $("//input[@name='password']")}
    get ConfirmPassword() {return $("//input[@name='confirmPassword']")}
    get SubmitButn() {return $("//input[@name='submit']")}
    get RegisterLink() {return $("//a[text()='REGISTER']")}

    // Develop action methods
    async registerUserMercuryTours(fn, ln, country, un, pass, confpass)
    {
        await this.SubmitButn.waitForClickable()
        await this.firstName.setValue(fn)
        await this.LastName.setValue(ln)
        await this.Country.selectByVisibleText(country)
        await this.userName.setValue(un)
        await this.PassWord.setValue(pass)
        await this.ConfirmPassword.setValue(confpass)
        await this.SubmitButn.click()
        await this.RegisterLink.waitForDisplayed()
        await this.RegisterLink.click()
    }
} 

module.exports = new Registration_MercuryTours()