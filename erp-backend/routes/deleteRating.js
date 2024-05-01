const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const name = req.params.name;

  connection.query('DELETE FROM Product_Rating WHERE product_id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting Product:', err);
      res.status(500).json({ error: 'Error deleting Product Rating' });
    } else {
      res.status(200).json({ message: 'Rating Product Deleted successfully' });
    }
  });
});

module.exports = router;