const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Abhishek:Abhi123@cluster0.17ec7.mongodb.net/mydatabase').then((res) => {
    console.log("database connected");
});