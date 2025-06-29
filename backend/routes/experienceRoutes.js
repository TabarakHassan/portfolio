const express = require("express");
const router = express.Router();
const experienceC = require("../controllers/experienceController");
const protect = require("../middlewares/authMidelware");

// GET all active experiences
router.get("/", experienceC.getAllExperiences);

// POST create new experience (Admin only)
router.post("/", protect, experienceC.createExperience);

// PUT update experience (Admin only)
router.put("/:id", protect, experienceC.updateExperience);

// DELETE (soft delete) (Admin only)
router.delete("/:id", protect, experienceC.deleteExperience);

module.exports = router;
