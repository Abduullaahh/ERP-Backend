const express = require('express');
const router = express.Router();
const {connection} = require('../database/ERP');
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const rejectedemployeeData = req.body;
  connection.query('DELETE FROM Tasks WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting Task:', err);
      res.status(500).json({ error: 'Error deleting Employee' }); // Send JSON response
    } else {

      res.status(200).json({ message: 'Employee Deleted successfully' }); // Send JSON response
    }
  });
});
module.exports = router;
