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

myapp.get("/alldata", async (req, res) => {
    const alldatalist = await myschimatype.find();
    res.send(alldatalist);
});

myapp.post("/registor", async (req, res) => {
    const { fullname, email, pass, dob, purl, gender } = req.body;

    const adduser = new myschimatype({
        fullname, email, pass, dob, purl, gender
    });
    await adduser.save();
    res.status(200).json({ message: "It is successfully registored", statuscode: 584 });
});

myapp.delete("/removeuser/:id", async (req, res) => {
    const { id } = req.params;
    const deletedata = await myschimatype.findByIdAndDelete({ _id: id });
    console.log(deletedata);
    res.status(256).json(deletedata);
});

myapp.patch("/edituser/:id", async (req, res) => {
    const { id } = req.params;
    const change = await myschimatype.findByIdAndUpdate(id, req.body, { new: true })
    res.status(258).json({ mydata: change, msg: "successfully updated", status: 547 })
});

myapp.get("/singlereocrd/:id", async (req, res) => {
    const { id } = req.params;
    const sinle = await myschimatype.findById({ _id: id });
    res.status(278).json(sinle);
});

myapp.post("/loginpage", async (req, res) => {
    const { email, pass } = req.body;
    const logindata = await myschimatype.findOne({ email: email });

    if (!logindata) {
        res.json({ msg: "email not found", status: 460 });
    }
    else {
        if (logindata.email === email && logindata.pass === pass) {
            res.json({ msg: "successfully login", status: 240 });
        }
        else {
            res.json({ msg: "email and password not match", status: 466 });
        }
    }
})

module.exports = myapp