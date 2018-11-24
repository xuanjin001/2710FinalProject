const mysql = require('mysql')
const config = require('./config')

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('mysql is connected as id ' + connection.threadId);
})

module.exports = connection