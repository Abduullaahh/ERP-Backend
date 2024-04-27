const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, quantity, cost, category } = req.body;

  connection.query('UPDATE Products SET name = ?, quantity = ?, cost = ?, category = ? WHERE id = ?', [name, quantity, cost, category, id], (error, result) =>{
    if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
    } else {
        console.log('Product Updated successfully:', result);
        
        // connection.query('UPDATE Inventory SET quantity = ?, cost = ?, category = ? WHERE name = ?', [quantity, cost, category, name], (error, inventoryResult) => {
        //     if (error) {
        //       console.error('Error updating inventory:', error);
        //     } else {
        //       console.log('Inventory Updated successfully:', inventoryResult);
        //     }
        //   });

        res.redirect('http://localhost:3000/products');
    }
    });
});

module.exports = router;
