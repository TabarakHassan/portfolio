const Education = require("../Models/Education.model");

// GET all active education entries
const getAllEducation = async (req, res) => {
  try {
    const education = await Education.find({ isActive: true });
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: "Error fetching education" });
  }
};

// POST create new education
const createEducation = async (req, res) => {
  try {
    const newEdu = await Education.create(req.body);
    res.status(201).json(newEdu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update education by ID
const updateEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Education.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating education" });
  }
};

// DELETE soft delete (isActive = false)
const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Education.findByIdAndUpdate(id, { isActive: false }, { new: true });
    res.json({ message: "Education deactivated", deleted });
  } catch (error) {
    res.status(400).json({ message: "Error deleting education" });
  }
};

module.exports = {
  getAllEducation,
  createEducation,
  updateEducation,
  deleteEducation
};
