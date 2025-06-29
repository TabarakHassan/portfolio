const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  description: String,
  startDate: { type: String, required: true },
  endDate: String,
  isCurrent: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Experience", experienceSchema);
