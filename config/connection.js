// Set up MySQL connection.
var mysql = require("mysql");

var mysqlPool = mysql.createPool({
  connectionLimit: 10,
  user: "bdfb93be299cc3",
  password: "ca214447",
  host: "us-cdbr-iron-east-01.cleardb.net",
  database: "heroku_a9783d6bd1fc647"

  // connectionLimit: 10,
  // host: "localhost",
  // port: 3306,
  // user: "root",
  // password: "password",
  // database: "klingon_db"
});

// changing to cloud mySQL...
// user: "bdfb93be299cc3"
// password: "ca214447"
// host: "us-cdbr-iron-east-01.cleardb.net"
// database: "heroku_a9783d6bd1fc647"

// Make connection.
mysqlPool.getConnection(function (err, connection) {
  if (err) {
    res.json({ "code": 100, "status": "Error connected to database " + err.stack })
    console.error("error connecting: " + err.stack);
  }
  if (connection) connection.release();
  return;
});

// console.log("connected as id " + connection.threadId);
// console.log("connection " + connection);
module.exports = mysqlPool;


// Export connection for our ORM to use.
