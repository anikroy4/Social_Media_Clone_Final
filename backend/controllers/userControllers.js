const User = require('../models/userModel');
const  {validateEmail,validateName, validatePassword, validateUsername}  = require('../helpers/validation');

const bcrypt = require('bcrypt');   

exports.newUser = async (req, res) => {
    try {
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


        if (!validateEmail(email)) {
            return res.status(400).json({
                message: "Please enter a valid email !"
            });
            
        }
        const checkMail= await User.findOne({email});

        if(checkMail){
            return res.status(400).json({
                message: "This email already exists !"
            });
        }

        if(!validateName(fName,4,15)){
            return res.status(400).json
            ({
                message: "First name must be between 3 and 15 characters long !"
            });
        }
        if(!validateName(lName,3,15)){
            return res.status(400).json
            ({
                message: "Last name must be between 3 and 15 characters long !"
            });
        }

        if(!validatePassword(password,8,40)){
            return res.status(400).json
            ({
                message: "Password must be at least 8 characters long !"
            });
        }
        //bycript password
        const crypted = await bcrypt.hash(password, 12);

    

        console.log(crypted);
        console.log('====================================');
        //validate username
        let tempUsername = fName + lName;

        let finalUsername = await validateUsername((tempUsername).toLowerCase());



        
        const user = await new User({
            fName,
            lName,
            username: finalUsername,
            email,
            password: crypted,
            bMonth,
            bYear,
            bDay,
            gender,
            verified
        }).save();

        res.send(user);

    }
    catch (err) {
        res.status(404).json({
            message: "Error while creating user",
            error: err.message
        });
    }
}