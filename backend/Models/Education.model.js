const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  university: {
    type: String,
    required: true,
    trim: true
  },
  degree: {
    type: String,
    required: true,
    trim: true
  },
  field: {
    type: String,
    trim: true
  },
  startYear: {
    type: String,
    required: true
  },
  endYear: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Education", educationSchema);
