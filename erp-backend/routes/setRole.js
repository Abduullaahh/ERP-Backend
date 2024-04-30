const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.post('/', (req, res) => {
    const { username, role } = req.body;
    connection.query('UPDATE Users SET role = ? WHERE username = ?', [role, username], (err, result) => {
        if (err) {
            console.error('Error updating user role:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('User role updated successfully');
        }
    });
});

module.exports = router;