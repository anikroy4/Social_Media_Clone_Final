const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
const { connectDB } = require('./database/dbconfig.js');

//database connection
connectDB();





const app = express();
app.use(cors());
app.use(router);


const Port=process.env.PORT || 8000;


app.listen(Port ,()=>{
    console.log(`Server is running on port ${Port}`);
})