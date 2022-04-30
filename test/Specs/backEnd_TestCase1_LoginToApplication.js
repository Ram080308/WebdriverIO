const { default: BrowserstackService } = require('@wdio/browserstack-service')
const testdata = require('../../Utilities/testdatafile')
const loginpage_objects = require('../PageObjects_NOPAdmin/LoginPage_objects')



describe ("TestCase1_Login to Nop Commerece Admin portal", ()=>{
    it ("1_Should allow user to login", async ()=>{
        
        await browser.maximizeWindow()
        await browser.deleteAllCookies()
        await browser.url("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")    
        username = testdata.nop_admin_username    
        password = testdata.nop_admin_password
        loginpage_objects.loginToApplication(username,password)  
        await browser.pause(3000)    
        
       

    })
})