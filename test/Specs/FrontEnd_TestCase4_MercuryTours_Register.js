var mercury_reg = require ('./../PageObjects_FrontStore/FrontEnd_Reg_Page_MercuryTours')
var data_base = require('./../../Utilities/Database_Connect')
var json_data = require ('./../../TestData/DBQueryResult.json')

describe("TestCase4_RegisterUser_MercuryTours_Database", ()=>{

      it ("Register the user Mercury Tours_Database values", async ()=>{
         await browser.maximizeWindow()
         await browser.url("https://demo.guru99.com/test/newtours/register.php")

        // await mercury_reg.registerUserMercuryTours('Ram','Chigari','CANADA','Guru','tester','tester')
         

         for (items in json_data)
         {
           await mercury_reg.registerUserMercuryTours(json_data[items].FirstName,json_data[items].LastName,
               json_data[items].Country.toUpperCase(),json_data[items].Username,json_data[items].Password,json_data[items].Password)              
               
         }

         
         
         

      })



})

