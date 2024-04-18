const express = require("express");
const router = express.Router();
const {connection} = require("../database/ERP");

router.post('/', (req, response) => {
    
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;
    const address=req.body.address;
    const data={
        name:name,
        phone:phone,
        email:email,
        address:address
    };

    connection.query('INSERT INTO Employees SET ?', data, (error, result) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            response.status(500).send('Internal Server Error');
        } else {
            console.log('Employee added successfully:', result);
            response.redirect('http://localhost:3000/employees');
        }
    });
    
});
module.exports=router;