const express = require('express');
const router = express.Router();
const {connection} = require('../database/ERP');
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const rejectedproductData = req.body;
  connection.query('DELETE FROM Products WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting Product:', err);
      res.status(500).json({ error: 'Error deleting Product' }); // Send JSON response
    } else {

      res.status(200).json({ message: 'Product Deleted successfully' }); // Send JSON response
    }
  });
});
module.exports = router;
