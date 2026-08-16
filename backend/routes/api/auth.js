const express = require('express');
const router=express.Router();
const {newUser, verifiedUser}=require('../../controllers/userControllers');


router.post('/',newUser);
router.post('/activate',verifiedUser);

module.exports= router;