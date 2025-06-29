const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    skillName:String,
    level: {
        type: String,
        enum: ["beginner", "intermediate", "expert"],
        default: "beginner"
      },
      isActive: {
        type: Boolean,
        default: true
      }
});

module.exports = mongoose.model("Skills",skillSchema);