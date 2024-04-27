const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { vendor_id, order_date, order_status, shipping_address, payment_status, delivery_date, order_details } = req.body;

  connection.query(
    'UPDATE Orders SET vendor_id = ?, order_date = ?, order_status = ?, shipping_address = ?, payment_status = ?, delivery_date = ?, order_details = ? WHERE id = ?',
    [vendor_id, order_date, order_status, shipping_address, payment_status, delivery_date, order_details, id],
    (error, result) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Order Updated successfully:', result);
        res.redirect('http://localhost:3000/employees');
      }
    }
  );
});

module.exports = router;