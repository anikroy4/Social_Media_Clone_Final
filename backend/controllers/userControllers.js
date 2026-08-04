const User = require('../models/userModel');


exports.newUser = async (req, res) => {
    try
    {
        const {
            fName,
            lName,
            username,
            email,
            password,
            bMonth,
            bYear,
            bDay,
            gender,
            verified   
            } = req.body;

        const user= await new User({
           fName,
            lName,
            username,
            email,
            password,
            bMonth,
            bYear,
            bDay,
            gender,
            verified 
            }).save();
        res.send(user);
        
    }
    catch(err){
        res.status(404).json({
            message: "Error while creating user",
            error: err.message
        });
    }
}