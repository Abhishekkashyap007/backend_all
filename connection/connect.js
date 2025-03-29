const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db).then((res) => {
    console.log("database connected");
});