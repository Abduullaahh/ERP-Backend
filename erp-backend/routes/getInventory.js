const express = require("express");
const router = express.Router();
const {connection} = require("../database/ERP");
// SELECT * FROM Products UNION SELECT * FROM Raw_Materials
router.get('/', (req, response) => {
    connection.query('SELECT * FROM Inventory', (err, res) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            response.status(500).send('Internal Server Error');
        } else {
            response.send(res);
            console.log('Data Read')
            // console.log(res)
        }
    });
});

module.exports = router;