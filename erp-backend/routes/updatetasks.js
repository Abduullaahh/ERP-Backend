const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, assignedTo, description, status } = req.body;

  connection.query('UPDATE Tasks SET task_name = ?, assigned_to = ?, description = ?, status = ? WHERE id = ?', [name, assignedTo, description, status, id], (error, result) =>{
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
