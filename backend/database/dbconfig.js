const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL;

exports.connectDB=()=>{
    mongoose.connect(URL).then(()=>{
        console.log('====================================');
        console.log('MongoDB connected successfully');
        console.log('====================================');
    })
}