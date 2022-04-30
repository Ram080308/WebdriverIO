class UserRegistrationPage
{
    get genderRadio() {return $("//input[@id='id_gender1']")}
    get firstName_field() {return $("//input[@id='customer_firstname']")}
    get lastName_filed() {return $("//input[@id='customer_lastname']")}
    get passwrd_field() {return $("//input[@id='passwd']")}
    get selectDaysDropdown() {return $("//select[@id='days']")}
    get selectMonthDropdown() {return $("//select[@id='months']")}
    get selectYearDropdown() {return $("//select[@id='years']")}
    get address1_field() {return $("//input[@id='address1']")}
    get city_field() {return $("//input[@id='city']")}
    get stateDropdown() {return $("//select[@id='id_state']")}
    get postcode() {return $("//input[@id='postcode']")}
    get mobilephone_field() {return $("//input[@id='phone_mobile']")}
    get alias_field() {return $("//input[@id='alias']")}
    get RegisterButton() {return $("//button[@id='submitAccount']")}

    // Actions methods
    async registerUser(fn,ln,pass,address,city,state,postcode,mobile,alias)

    {        
        // await (await this.genderRadio).waitForDisplayed()
        await this.genderRadio.click()
        await browser.pause(2000)
        await this.firstName_field.setValue(fn)
        await browser.pause(2000)
        await this.lastName_filed.setValue(ln)
        await browser.pause(2000)
        await this.passwrd_field.setValue(pass)
        await browser.pause(2000)
        await this.selectDaysDropdown.selectByAttribute('value','5')
        await this.selectMonthDropdown.selectByAttribute('value','5')
        await this.selectYearDropdown.selectByAttribute('value','2005')
        await browser.pause(2000)
        await this.address1_field.setValue(address)
        await browser.pause(2000)
        await this.city_field.setValue(city)
        await browser.pause(2000)
        await this.stateDropdown.selectByVisibleText(state)
        await browser.pause(2000)
        await this.postcode.setValue(postcode)
        await browser.pause(2000)
        await this.mobilephone_field.setValue(mobile)
        await browser.pause(2000)
        await this.alias_field.setValue(alias)
        await browser.pause(2000)
        await this.RegisterButton.click()


    }
}

module.exports = new UserRegistrationPage()