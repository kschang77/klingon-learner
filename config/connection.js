// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({

  user: "bdfb93be299cc3",
  password: "ca214447",
  host: "us-cdbr-iron-east-01.cleardb.net",
  database: "heroku_a9783d6bd1fc647"

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
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
