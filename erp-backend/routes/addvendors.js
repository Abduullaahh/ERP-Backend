const express=require("express");
const router=express.Router();
const {connection} = require("../database/ERP");
router.post('/',(req,res)=>{
    const name=req.body.name;
    const materials=req.body.reqMaterial;
    const unitcost=req.body.unitCost;
    const phone=req.body.contact;
    const data={
        name:name,
        materials:materials,
        contact:phone,
        unitcost:unitcost
    }
    // console.log("Data received: ",data);
    connection.query('INSERT INTO Vendors SET ?',data,(error,result)=>{
        if(error)
        {
            console.log(error);
        }else
        {
            console.log("Vendor Added");
            res.redirect('http://localhost:3000/vendors');
        }
    })
})
module.exports=router;