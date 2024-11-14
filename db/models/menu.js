const mongoose = require('mongoose'); 

const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        required:true
    },
    ingrediantes:{
        type:String,
        required:true,
        enum:["wings", "spice", "sauce"]
    }
})

const menuModel = mongoose.model('menu', menuSchema)

module.exports = menuModel; 