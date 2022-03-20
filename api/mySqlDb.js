const mysql= require('mysql'); 

//DB connection properties
let mysqlConnection = mysql.createConnection({
    host: 'localhost', 
    user: 'educuser',
    password: 'educ',
    database: 'educdb'
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log ('DB  connection succeded.');
    else 
        console.log ('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mysqlConnection;