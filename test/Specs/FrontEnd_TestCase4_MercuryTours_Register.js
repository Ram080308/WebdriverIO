var mercury_reg = require ('./../PageObjects_FrontStore/FrontEnd_Reg_Page_MercuryTours')
data_base = require('./../../Utilities/Database_Connect')

describe("TestCase4_RegisterUser_MercuryTours_Database", ()=>{

      it ("Register the user Mercury Tours_Database values", async ()=>{
         await browser.maximizeWindow()
         await browser.url("https://demo.guru99.com/test/newtours/register.php")
         await browser.pause(5000)

         // Execute the Database operation
         
         

      })



})

