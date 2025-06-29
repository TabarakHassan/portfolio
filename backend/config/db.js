const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const conct =await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB is connected :${conct.connection.host}`);
    }catch(err){
        console.error(`mongoDB connection error:${error.message}`);
        process.exit(1); //if there is any problem close db &exit
    }

}

module.exports = connectDB;