var mysql = require('mysql');
require('dotenv').config();
let mysqlConnect = function () {
    return mysql.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
        port: process.env.DB_PORT,
        insecureAuth : true
    });
};

module.exports.localConnect = mysqlConnect;