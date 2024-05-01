const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.post('/', (req, response) => {
    const { username } = req.body;
    connection.query('SELECT * FROM Users WHERE username = ?', [username], (err, res) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            response.status(500).send('Internal Server Error');
        } else {
            if (res.length > 0) {
                response.status(200).send(res[0]);
            } else {
                response.status(404).send('User not found');
            }
        }
    });
});

module.exports = router;