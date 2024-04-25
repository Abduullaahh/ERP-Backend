// const express = require('express');
// const router = express.Router();
// const {connection} = require('../database/ERP');
// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   const name = req.params.name;
//   const rejectedproductData = req.body;
//   connection.query('DELETE FROM Products WHERE id = ?', [id], (err, result) => {
//     if (err) {
//       console.error('Error deleting Product:', err);
//       res.status(500).json({ error: 'Error deleting Product' });
//     } else {
//       res.status(200).json({ message: 'Product Deleted successfully' });
//       connection.query('DELETE FROM Inventory WHERE name = ?', [name], (error, inventoryResult) => {
//         if (error) {
//           console.error('Error deleting inventory:', error);
//         } else {
//           console.log('Inventory Deleted successfully:', inventoryResult);
//         }
//       });
//     }
//   });
// });
// module.exports = router;
const express = require('express');
const router = express.Router();
const { connection } = require('../database/ERP');

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const name = req.params.name;

  connection.query('DELETE FROM Products WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting Product:', err);
      res.status(500).json({ error: 'Error deleting Product' });
    } else {
      res.status(200).json({ message: 'Product Deleted successfully' });
    }
  });
});

module.exports = router;