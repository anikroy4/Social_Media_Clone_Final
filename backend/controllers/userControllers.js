const User = require('../models/userModel');
const  {validateEmail,validateName, validatePassword, validateUsername}  = require('../helpers/validation');
const {createToken} = require('../helpers/token');
const bcrypt = require('bcrypt');   
const { sendVerificationEmail } = require('../helpers/mailer');
const jwt = require('jsonwebtoken');

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

        let finalUserName = await validateUsername((tempUsername).toLowerCase());

        
        const user = await new User({
            fName,
            lName,
            username: finalUserName,
            email,
            password: crypted,
            bMonth,
            bYear,
            bDay,
            gender,
            verified
        }).save();

        const token = createToken({id:user._id.toString()},'3d');
        const url= `${process.env.BASE_URL}/activate/${token}`;

        sendVerificationEmail(user.email, user.fName, url);

        const tokens = createToken({id:user._id.toString()},'7d');

        res.send({
            id: user._id,
            username: user.username,
            profilePicture: user.profilePicture,
            fName: user.fName,
            lName: user.lName,
            token: tokens,
            verified: user.verified,
            message: "Account has been created successfully, Please check your email to verify your account !"
        });
    }
    catch (err) {
        res.status(404).json({
            message: "Error while creating user",
            error: err.message
        });
    }
}

exports.verifiedUser=async (req, res) => {
    try{
        const {token}=req.body;
        const user=jwt.verify(token,process.env.SECRET_KEY);

        const checkUser=await User.findById(user.id);  

        if(checkUser.verified==true){
            return res.status(400).json({
                message: "This email is already verified !"
            });
        }
        else{
            await User.findByIdAndUpdate(user.id,{verified:true});
            return res.status(200).json({
                message: "Email has been verified successfully !"
            });
        }

    }
    catch(err){
        res.status(404).json({
            message: "Error while verifying user",
            error: err.message 
        });
    }
}

exports.loginUser=async (req,res) => {
    try{
        const {email,password}=req.body;

        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "User not found ! Please check your email and try again !",
                error : err.message
            });
        }
        const check= await bcrypt.compare(password,user.password);
        if(!check){
            return res.status(400).json({
                message: "Invalid credentials . PLease try again !",
                
            });
        }   
        const token = createToken({id:user._id.toString()},'7d');

        res.send({
            id: user._id,
            username: user.username,
            profilePicture: user.profilePicture,
            fName: user.fName,
            lName: user.lName,
            token: token,
            verified: user.verified,
            message: "Login successfullly"
        });

    }catch(err){  
        res.status(404).json({
            // message: "Error while logging in user",
            error: err.message 
        });
    }
}