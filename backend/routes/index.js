const express = require('express');
const router = express.Router();
const api = require('./api');
const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');


// || '/api/v1'
const baseAPI=process.env.BASE_API_URL ;
router.use(baseAPI, api);


module.exports=router;