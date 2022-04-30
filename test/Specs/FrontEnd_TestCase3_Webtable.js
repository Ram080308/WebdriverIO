const webtable = require('../PageObjects_FrontStore/FrontEnd_Webtable_Pageobjects')
const util_data = require('../../Utilities/testdatafile')

describe("Webtable", async ()=>{
    it ("Should click the appropriate checkbox", async ()=>{

        await browser.maximizeWindow()
        const wt_url = util_data.webtable_url
        await browser.url (wt_url)
        await browser.pause(5000)

        webtable.selectTheRequiredCheckbox("Azerbaijani")
        await browser.pause(5000)
        
    })




})