const express = require("express");
const router = express.Router();
const {connection} = require("../database/ERP");

router.post('/', (req, response) => {
    
    const name=req.body.name;
    const quantity=req.body.quantity;
    const description=req.body.description;
    const data={
        name:name,
        quantity:quantity,
        description:description,
        status:'pending'
    };

    connection.query('INSERT INTO Requested_Orders SET ?', data, (error, result) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            response.status(500).send('Internal Server Error');
        } else {
            console.log('Employee added successfully:', result);
            response.redirect('http://enterprise-resource-planner.netlify.app/employees');
        }
    });
    
});
module.exports=router;
