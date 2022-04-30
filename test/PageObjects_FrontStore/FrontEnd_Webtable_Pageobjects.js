class Webtable
{  
    

    // Action methods
    async selectTheRequiredCheckbox(inputValue)
    {
        const rows = await $$("//table[@id='countries']//tbody//tr")    
        const chk_box = await $$("//input[@type='checkbox']")     

        for (let r=0; r<rows.length; r++)
        {
            let row_values =  await rows[r].getText();
            if (row_values.includes(inputValue))            
            {
                await chk_box[r-1].click()
                
                
            }
        }
    }
}

module.exports = new Webtable()