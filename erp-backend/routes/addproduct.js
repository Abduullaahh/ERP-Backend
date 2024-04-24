const express = require("express");
const router = express.Router();
const {connection} = require("../database/ERP");

router.post('/', (req, response) => {
    
    const name=req.body.name;
    const quantity=req.body.quantity;
    const cost=req.body.cost;
    const category=req.body.category;
    const data={
        name:name,
        quantity:quantity,
        cost:cost,
        category:category
    };

    connection.query('INSERT INTO Products SET ?', data, (error, result) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            response.status(500).send('Internal Server Error');
        } else {
            console.log('Product added successfully:', result);

            const dataInventory={
                name:name,
                quantity:quantity,
                cost:cost,
                category:category,
                type:"Product"
            };

            connection.query('INSERT INTO Inventory SET ?', dataInventory, (inventoryError, inventoryResult) => {
                if (inventoryError) {
                    console.error('Error adding product to Inventory:', inventoryError);
                    response.status(500).send('Internal Server Error');
                } else {
                    console.log('Product added to Inventory successfully:', inventoryResult);
                    response.redirect('http://localhost:3000/products');
                }
            });
        }
    });
    
});
module.exports=router