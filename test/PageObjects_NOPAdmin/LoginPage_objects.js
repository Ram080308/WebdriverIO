class LoginPage
{

    get emailfield() {return $("//input[@id='Email']")}
    get paswordfield() {return $("//input[@id='Password']")}
    get loginbutton() {return $("//button[@type='submit']")}

    // Actions
    async loginToApplication(username,pwd)
    {        
        await (await this.emailfield).waitForDisplayed()
        await this.emailfield.setValue(username)
        await this.paswordfield.setValue(pwd)
        await (await this.loginbutton).waitForClickable()
        await this.loginbutton.click()

    }

}

module.exports = new LoginPage()