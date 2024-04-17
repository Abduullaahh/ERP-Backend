const mysql = require('mysql');

const connection = mysql.createConnection
(
    {
        host : 'brs8bkjxcwauub8swz0s-mysql.services.clever-cloud.com',
        database : 'brs8bkjxcwauub8swz0s',
        user : 'uxkzuyeqeb6cunzl',
        password : 'iPfgydPv4X8uUvi4yjwv',
        port : '3306',
    }
)

connection.connect((err) => {
    if(err) throw err;
    console.log('DataBase Connected');
})

module.exports = {connection};