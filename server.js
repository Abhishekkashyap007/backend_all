const express = require('express');
const myrout = require('./routes/route');
const cors = require('cors');
const myapp = express();

require('dotenv').config();
const port = process.env.PORT || 4500;

require('./connection/connect');



myapp.use(express.json());
myapp.use(cors());
myapp.use(myrout);

myapp.listen(port,()=>{
    console.log(`backend is running: ${port}`);
})