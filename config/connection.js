//MySQl connection Set up///////
let mysql = require("mysql");

require("dotenv").config();
if (process.env.JAWSDB_URL) {
    // Heroku MySQL (JawsDB)
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Local MySQL
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYSQL_PASS,
        database:process.env.NAME_DB
    });
}
//Make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);

});

//Export connection for ORM to use
module.exports = connection;