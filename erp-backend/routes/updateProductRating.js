const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  console.log("Id passed: ",id);
  const { product_id, product_name, rating } = req.body;

  connection.query('UPDATE Product_Rating SET product_id = ?, product_name = ?, rating = ? WHERE product_id = ?', [product_id, product_name, rating, product_id], (error, result) =>{
    if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
    } else {
        console.log('Product Updated successfully:', result);
        res.redirect('http://enterprise-resource-planner.netlify.app/products');
    }
    });
});

module.exports = router;
