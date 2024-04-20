const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, materials, contact } = req.body;

  console.log('Received update request for vendor with ID:', id);

  connection.query('UPDATE Vendors SET name = ?, materials = ?, contact = ? WHERE id = ?', [name, materials, contact, id], (error, result) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Vendor Updated successfully:', result);
      res.redirect('http://localhost:3000/vendors');
    }
  });
});

module.exports = router;
