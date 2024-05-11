const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { vendorname, material, quantity, amount, shippingStatus, paymentStatus, date } = req.body;

  connection.query(
    'UPDATE Orders SET vendor_name = ?, material = ?, quantity = ?, amount = ?, shipping_status = ?, payment_status = ?, order_date = ? WHERE id = ?',
    [vendorname, material, quantity, amount, shippingStatus, paymentStatus, date, id],
    (error, result) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Order Updated successfully:', result);
        res.redirect('http://enterprise-resource-planner.netlify.app/orders');
      }
    }
  );
});

module.exports = router;
