const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: String,
    techStack: [String], // [ 'Angular', 'Node.js' ]
    githubLink: String,
    liveLink: String,// vedio
    image: String, // img name
    createdAt: {
      type: Date,
      default: Date.now
    },
    isActive: { type: Boolean, default: true }

});

module.exports = mongoose.model('Project',projectSchema);