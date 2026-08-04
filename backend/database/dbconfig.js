const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('====================================');
        console.log('Database connected successfully');
        console.log('====================================');
    }).catch((err)=>{
        console.log('====================================');
        console.log('Database connection failed');
        console.log(err);
        console.log('====================================');
    }) 
}