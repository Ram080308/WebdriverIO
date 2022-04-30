const testdata = require('../../Utilities/testdatafile')
const exceldata = require('../../Utilities/ReadData_Excel')
const front_homepage = require('../PageObjects_FrontStore/FrontEnd_HomePage_objects')
const front_reg_lp = require('../PageObjects_FrontStore/FrontEnd_RegisterLP_objects')
const front_registration_page = require('../PageObjects_FrontStore/FrontEnd_User_RegisterPage_objects')





describe("Frontend_TestCase2_Register a user", async ()=>{
    it ("FrontEnd_TestCase2_System should allow user to register", async()=>{

        await browser.maximizeWindow()
        await browser.url("http://automationpractice.com/index.php")
        await front_homepage.clickSignInLink()
        mail = testdata.front_end_email
        console.log("The Email is " + mail);
        await front_reg_lp.clickCreateAccountButton(mail)
        await browser.pause(3000)

        excel_file_path = "E:\\E2EWebdriverAutomation\\TestData_FE.xlsx"
        excel_sheetname = "Sheet1"

        const values = exceldata.readDataFromExcel(excel_file_path,excel_sheetname)
        console.log(values[0]["AssignAddress"]);
        await front_registration_page.registerUser(values[0]["Firstname"], values[0]["Lastname"], values[0]["Password"],
        values[0]["Address"], values[0]["City"], values[0]["State"], values[0]["Postcode"],
        values[0]["Mobile"], values[0]["AssignAddress"])
        await browser.pause(3000)
        

    })
})