const express = require('express');
const router=express.Router();
const api=require('./api');

const baseAPI=process.env.BASE_API_URL || '/api/v1';
router.use(baseAPI, api);


module.exports=router;