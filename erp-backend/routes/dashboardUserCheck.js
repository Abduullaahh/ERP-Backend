const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.post('/', (req, res) => {
    connection.query('SELECT username FROM Users WHERE role = ? LIMIT 1', [true], (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            if (result.length > 0) {
                res.status(200).send({ username: result[0].username });
            } else {
                res.status(404).send('User not found');
            }
        }
    });
});

module.exports = router;