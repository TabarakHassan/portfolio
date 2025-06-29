const Experience = require("../Models/Experiences.model");

// Get all active experiences
const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({ isActive: true }).sort({ startDate: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create experience
const createExperience = async (req, res) => {
  try {
    const newExp = await Experience.create(req.body);
    res.status(201).json(newExp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update experience
const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Experience.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Soft delete experience
const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Experience.findByIdAndUpdate(id, { isActive: false }, { new: true });
    res.json({ message: "Experience deactivated", deleted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllExperiences,
  createExperience,
  updateExperience,
  deleteExperience
};
