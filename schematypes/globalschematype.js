const mongoose = require('mongoose');

const Basictype = new mongoose.Schema({    //basictype is a model
    name:{},
    phone:{},
    email:{}, 
    pass:{}
})

const myschimatype = mongoose.model("basicdata",Basictype);
module.exports = myschimatype