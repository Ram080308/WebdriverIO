class FrontRegisterLP
{
    get EmailAddressField() {return $("//input[@id='email_create']")}
    get CreateAccountButton() {return $("//button[@id='SubmitCreate']")}

    // Actions Methods
    async clickCreateAccountButton(email)
    {
        await (await this.EmailAddressField).waitForDisplayed()
        await this.EmailAddressField.setValue(email)
        await this.CreateAccountButton.click()
    }
}

module.exports = new FrontRegisterLP()