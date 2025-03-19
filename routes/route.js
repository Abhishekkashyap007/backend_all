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

myapp.get("/alldata", async (req, res) => {
    const alldatalist = await myschimatype.find();
    // console.log(alldatalist);
    res.send(alldatalist);
});

myapp.post("/registor", async (req, res) => {
    const { fullname, email, pass, dob, purl, gender } = req.body;

    const adduser = new myschimatype({
        fullname, email, pass, dob, purl, gender
    });
    await adduser.save();
    res.status(200).json(adduser);
});

myapp.delete("/removeuser/:id", async (req, res) => {
    // const {name} = req.body;
    // const deletedata = await myschimatype.deleteMany({name:name});
    const { id } = req.params;
    const deletedata = await myschimatype.findByIdAndDelete({ _id: id });
    console.log(deletedata);
    res.status(256).json(deletedata);

})


module.exports = myapp