const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'azlkaz',
  database: 'CRUD',
})

module.exports = {
  db,
}