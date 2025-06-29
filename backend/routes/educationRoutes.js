const express = require("express");
const router = express.Router();
const educationC = require("../controllers/educationController");
const protect = require("../middlewares/authMidelware");

router.get("/", educationC.getAllEducation);
router.post("/",protect, educationC.createEducation);
router.put("/:id",protect, educationC.updateEducation);
router.delete("/:id",protect, educationC.deleteEducation);

module.exports = router;
