const express = require("express");
const router = express.Router();
const { connection } = require("../database/ERP");

router.post('/', (req, res) => {
    const productid = req.body.productid;
    const product = req.body.product;
    const rating = req.body.rating;
    const data = {
        product_id: productid,
        product_name: product,
        rating: rating,
    };
    connection.query('INSERT INTO Product_Rating SET ?',data,(error,result)=>{
        if(error)
        {
            console.log(error);
        }else
        {
            console.log("Product Rating Added");
            res.redirect('http://localhost:3000/RateProduct');
        }
    })
});

module.exports = router;
