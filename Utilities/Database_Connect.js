const mysql = require('mysql')
const fs = require('fs');
const { stringify } = require('querystring');

//Create the connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'Shonya@0803',
    database : 'webdriverIO'
})

// Connect to DB
connection.connect()


// Query the result
connection.query("select * from user_reg", (err, results)=>{

    
    fs.writeFile('TestData/DBQueryResult.json', JSON.stringify(results), (err)=>{})    
}
    
    
)
;
// Close the connection
connection.end()


