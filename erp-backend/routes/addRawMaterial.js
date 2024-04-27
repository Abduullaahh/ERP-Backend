const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.post('/', (req, res) => { // Updated route path
    const name = req.body.material; // Extracting material name from request body
    const unitcost = req.body.unitcost; // Extracting unit cost from request body
    const quantity = req.body.quantity; // Extracting quantity from request body
    const totalcost = req.body.totalcost; // Extracting total cost from request body
    // console.log("Name: ",name);
    const data = {
        name: name,
        quantity: quantity,
        cost: unitcost,
        totalcost: totalcost
    };

    // console.log("Data received: ", data);

    connection.query('INSERT INTO Raw_Materials SET ?',data,(error,result)=>{
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Product added successfully:', result);
            res.redirect('http://localhost:3000/products');
        }
    })
});

module.exports = router;