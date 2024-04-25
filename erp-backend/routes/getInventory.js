// const express = require("express");
// const router = express.Router();
// const {connection} = require("../database/ERP");
// // SELECT * FROM Products UNION SELECT * FROM Raw_Materials
// router.get('/', (req, response) => {
//     connection.query('SELECT * FROM Inventory', (err, res) => {
//         if (err) {
//             console.error('Error executing SQL query:', err);
//             response.status(500).send('Internal Server Error');
//         } else {
//             response.send(res);
//             console.log('Data Read')
//             // console.log(res)
//         }
//     });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.get('/', (req, response) => {
    const sqlQuery = `
        SELECT id AS "Item ID", name AS "Item Name", quantity AS "Quantity", cost AS "Unit Cost", category AS "Category", 'Product' AS "Type" FROM Products 
        UNION ALL 
        SELECT id AS "Item ID", name AS "Item Name", quantity AS "Quantity", cost AS "Unit Cost", totalcost AS "Total Cost", 'Raw Material' AS "Type" FROM Raw_Materials
    `;
    connection.query(sqlQuery, (err, res) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            response.status(500).send('Internal Server Error');
        } else {
            response.send(res);
            console.log('Data Read')
        }
    });
});

module.exports = router;
