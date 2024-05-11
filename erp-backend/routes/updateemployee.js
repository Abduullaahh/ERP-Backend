const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, phone, email, address } = req.body;

  connection.query('UPDATE Employees SET name = ?, phone = ?, email = ?, address = ? WHERE id = ?', [name, phone, email, address, id], (error, result) =>{
    if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
    } else {
        console.log('Employee Updated successfully:', result);
        res.redirect('http://enterprise-resource-planner.netlify.app/employees');
    }
    });
});

module.exports = router;
