const express = require('express');
const myschimatype = require('../schematypes/globalschematype');    //imported schematypes file
const myapp = express.Router();



myapp.get("/", (req, res) => {
    res.send("<h1>welcome to expressjs</h1>");
});
myapp.get("/about", (req, res) => {
    res.send("welcome");
});
myapp.get("/contact", (req, res) => {
    res.send(req.path);
});
myapp.get(/b/, (req, res) => {
    // res.send("ddfjsfk");
    res.json({ name: "abhi", age: "50" })
});
myapp.get("/alldata",async(req,res)=>{    
    const alldatalist =  await myschimatype.find();
    // console.log(alldatalist);
    res.send(alldatalist);
})

module.exports = myapp