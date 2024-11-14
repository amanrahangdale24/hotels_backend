const mongoose = require('mongoose'); 

function dbConnect(){
    mongoose.connect('mongodb://0.0.0.0/hotel').then(()=>{
        console.log("connected to hotel db") ;
    })
}

module.exports = dbConnect; 