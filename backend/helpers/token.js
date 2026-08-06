const jwt=require('jsonwebtoken');

exports.createToken = (user, expiredIn) => {

    return jwt.sign(user,process.env.SECRET_KEY,{
        expiresIn: expiredIn
    })
}
