const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { connectToDB } = require('./database/dbconfig');

//database connection
connectToDB();



const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


const Port=process.env.PORT || 8000;


app.listen(Port ,()=>{
    console.log(`Server is running on port ${Port}`);
})