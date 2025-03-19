const mongoose = require('mongoose');

const Basictype = new mongoose.Schema({    //basictype is a model
    fullname: {
        type: String,
        require: true,
        // minLength:[4,"oooo"]
    },
    dob: {
        type: String
    },
    email: {
        type: String
    },
    pass: {
        type: String
    },
    gender: {
        type: String
    },
    purl: {
        type: String
    }
})

const myschimatype = mongoose.model("basicdata", Basictype);
module.exports = myschimatype