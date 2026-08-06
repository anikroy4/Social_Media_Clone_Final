const User = require('../models/userModel');

exports.validateEmail =(email) => {
 
    return String(email).toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
}

exports.validateName =  (text,min,max) => {
    if(text.length< min || text.length>max){
        return false;
    }else{
        return true;
    }
}   

exports.validatePassword= (password, min, max) => {
    if(password.length<min || password.length>max){
        return false;   
    }else{
        return true;
    }   
}

exports.validateUsername = async (username) => {
    let istrue = false;
    do{
        let user = await User.findOne({username});
        if(user){
            username += (+new Date() * Math.random()).toString().substring(0, 1);
            istrue = true;  
        }else{
            istrue = false;
        }

    } while(istrue)

    return username;

}
