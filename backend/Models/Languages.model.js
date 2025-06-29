const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  languageName: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced",
     "fluent", "native"],
    default: "beginner"
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Languages", languageSchema);
