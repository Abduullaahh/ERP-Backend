const express = require("express");
const router = express.Router();
const {connection} = require("../database/ERP");

router.post('/', (req, response) => {
    
   const name=req.body.name;
   const assignedto=req.body.assignedTo;
   const desc=req.body.description;
   const status=req.body.status;
   const data={
    task_name:name,
    assigned_to:assignedto,
    description:desc,
    status:status
   };
    connection.query('INSERT INTO Tasks SET ?', data, (error, result) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            response.status(500).send('Internal Server Error');
        } else {
            console.log('Task added successfully:', result);
            response.redirect('http://localhost:3000/tasks');
        }
    });
    
});
module.exports=router;