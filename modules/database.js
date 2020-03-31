'use strict';
console.time("Module => database");
const mysql = require("mysql2");

const sql = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})


exports.query = (query, callback) => {
    sql.query(query, callback);
}

exports.escape = (s) => {
    return sql.escape(s);
}

console.timeEnd("Module => database");
