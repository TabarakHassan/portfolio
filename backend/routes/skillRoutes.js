const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");
const protect = require("../middlewares/authMidelware");

// Get all skills
router.get("/", skillController.getAllSkills);

// Create new skill
router.post("/",protect,skillController.createSkill);

// Update skill
router.put("/:id",protect,skillController.updateSkill);

// Soft delete skill
router.delete("/:id",protect,skillController.deleteSkill);

module.exports = router;
