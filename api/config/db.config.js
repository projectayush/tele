const mysql = require('mysql');

// sql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  'volansys@123',
    database:'teleticdb'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully');
})

module.exports = dbConn;
