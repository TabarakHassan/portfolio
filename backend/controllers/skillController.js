const Skill = require("../Models/Skills.model");

// Get all skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ isActive: true });
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: "Error fetching skills" });
  }
};

// Create a skill
const createSkill = async (req, res) => {
  try {
    const newSkill = await Skill.create(req.body);
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a skill
const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSkill = await Skill.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedSkill);
  } catch (err) {
    res.status(400).json({ message: "Error updating skill" });
  }
};

// Soft delete a skill
const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Skill.findByIdAndUpdate(id, { isActive: false }, { new: true });
    res.json({ message: "Skill deleted", deleted });
  } catch (err) {
    res.status(400).json({ message: "Error deleting skill" });
  }
};

module.exports = {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
};
