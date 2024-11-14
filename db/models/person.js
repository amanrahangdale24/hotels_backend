const mongoose = require('mongoose'); 

const personShcema = mongoose.Schema({
    name:{
        type:String, 
        required:true 
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        required:true,
        enum:['chef', 'waiter', 'customer']
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

const personModel = mongoose.model('persons', personShcema); 
module.exports = personModel; 