const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
dotenv.config(); 

function dbConnect(){
    mongoose.connect(process.env.MONGO_PUBLIC_URL).then(()=>{
        console.log("connected to hotel db") ;
    })
}

module.exports = dbConnect; 