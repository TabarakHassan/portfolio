const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    name: String,
    title:String,
    description:String,
    frealanceAvailable:{
        type:Boolean,
        default:false
    },
    cv:String,
    image:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("About",aboutSchema);// the schema name