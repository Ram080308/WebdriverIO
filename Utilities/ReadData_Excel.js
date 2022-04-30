const reader = require('xlsx')

class ReadExcelData
{ 
    
    readDataFromExcel(fileName, SheetName)
    {
        const file = reader.readFile(fileName)
        const dataFromCell = reader.utils.sheet_to_json(file.Sheets[SheetName])
        return dataFromCell
    }
}

module.exports = new ReadExcelData()