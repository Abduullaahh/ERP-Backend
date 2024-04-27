// const express = require("express");
// const router = express.Router();
// const { connection } = require("../database/ERP");

// router.post('/', (req, res) => { // Updated route path
//     const name = req.body.material; // Extracting material name from request body
//     const unitcost = req.body.unitcost; // Extracting unit cost from request body
//     const quantity = req.body.quantity; // Extracting quantity from request body
//     const totalcost = req.body.totalcost; // Extracting total cost from request body
//     const vendor = req.body.vendor;
//     // console.log("Name: ",name);
//     const data = {
//         name: name,
//         quantity: quantity,
//         cost: unitcost,
//         totalcost: totalcost
//     };
//     const order_data={
//         vendor_name:vendor,
//         material:name,
//         quantity:quantity,
//         amount:totalcost,
//         shipping_status:"Pending",
//         payment_status:"Pending",
//         order_date:Date
//     }

//     // console.log("Data received: ", data);

//     connection.query('INSERT INTO Raw_Materials SET ?',data,(error,result)=>{
//         if (error) {
//             console.error('Error executing SQL query:', error);
//             res.status(500).send('Internal Server Error');
//         } else {
//             console.log('Product added successfully:', result);
//             res.redirect('http://localhost:3000/products');
//         }
//     })
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.post('/', (req, res) => {
    const name = req.body.material;
    const unitcost = req.body.unitcost;
    const quantity = req.body.quantity;
    const totalcost = req.body.totalcost;
    const vendor = req.body.vendor;

    const data = {
        name: name,
        quantity: quantity,
        cost: unitcost,
        totalcost: totalcost
    };
    const order_data = {
        vendor_name: vendor,
        material: name,
        quantity: quantity,
        amount: totalcost,
        shipping_status: "Pending",
        payment_status: "Pending",
        order_date: new Date().toISOString().split('T')[0]
    };

    connection.query('INSERT INTO Raw_Materials SET ?', data, (error, result) => {
        if (error) {
            console.error('Error adding product:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        console.log('Product added successfully:', result);

        connection.query('INSERT INTO Orders SET ?', order_data, (error, result) => {
            if (error) {
                console.error('Error adding order:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
            
            console.log('Order added successfully:', result);
            res.redirect('http://localhost:3000/products');
        });
    });
});

module.exports = router;
