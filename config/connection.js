// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kwijibo1!",
  database: "eatdaburger_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kwijibo1!',
    database: "eatdaburger_db"
  })
}

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to DB: ${err.stack}`);
    return;
  }
  console.log(`Connected to DB with ID ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
