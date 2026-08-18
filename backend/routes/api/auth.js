const express = require('express');
const router=express.Router();
const {newUser, verifiedUser, loginUser}=require('../../controllers/userControllers');


router.post('/',newUser);
router.post('/activate',verifiedUser);
router.post('/login',loginUser);

module.exports= router;