const express = require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.send("Hello from auth ");
    console.log('====================================');
    console.log('API auth accessed');
    console.log('====================================');
})

module.exports=router;