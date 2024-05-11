const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  console.log(status);
  connection.query(
    'UPDATE Requested_Orders SET status = ? WHERE id = ?',
    [status, id],
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
