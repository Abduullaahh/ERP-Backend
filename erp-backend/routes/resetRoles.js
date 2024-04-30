const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.post('/', (req, res) => {
    connection.query('UPDATE Users SET role = ?', [false], (err, result) => {
        if (err) {
            console.error('Error updating user roles:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('User roles reset successfully');
        }
    });
});

module.exports = router;