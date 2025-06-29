const Language = require("../Models/Languages.model");

// GET all languages
const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find({ isActive: true });
    res.status(200).json(languages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching languages" });
  }
};

// POST create new language
const createLanguage = async (req, res) => {
  try {
    const language = await Language.create(req.body);
    res.status(201).json(language);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update language
const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Language.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Error updating language" });
  }
};

// DELETE soft delete language
const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Language.findByIdAndUpdate(id, { isActive: false }, { new: true });
    res.json({ message: "Language deleted", deleted });
  } catch (err) {
    res.status(400).json({ message: "Error deleting language" });
  }
};

module.exports = {
  getAllLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage
};
