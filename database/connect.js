const fs = require('fs');
const mysql = require('mysql');
const chalk = require('chalk');

if (!process.env.MYSQL_USERNAME || !process.env.MYSQL_PASSWORD) {
    console.log(chalk.yellow(`Please make sure you have .env 
        file in your project with:\n
        MYSQL_USERNAME \n
        MYSQL_PASSWORD`));
}

var connection = mysql.createConnection({
    host: '35.187.228.151',
    port: '3306',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: 'phazerotraining',
    /*ssl: {
        ca: fs.readFileSync(__dirname + '/server-ca.pem'),
        key: fs.readFileSync(__dirname + '/client-key.pem'),
        cert: fs.readFileSync(__dirname + '/client-cert.pem')
    }*/
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    if (results[0].solution == 2)
        console.log(chalk.blue('Mysql connection successfull'));
});
   
//connection.end();
global.db = connection;