const express = require("express");
const router = express.Router();
const {connection} = require("../database/ERP");

router.get('/:selectedvendor', (req, response) => {
    const vendor=req.params.selectedvendor;
    console.log("Vendor name: ",vendor);
    connection.query('SELECT materials,unitcost FROM Vendors where name = ?',[vendor], (err, res) => {
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
