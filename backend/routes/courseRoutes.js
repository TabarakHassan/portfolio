// routes/courseRoutes.js

const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const upload = require("../middlewares/multerConfig");
const protect = require("../middlewares/authMidelware");

// middleware courses
const setCourseFolder = (req, res, next) => {
  req.folder = "courses";
  next();
};

// GET 
router.get("/", courseController.getAllCourses);

// POST 
router.post("/",protect, setCourseFolder, upload.single("image"), courseController.createCourse);

// PUT 
router.put("/:id",protect, setCourseFolder, upload.single("image"), courseController.updateCourse);

// DELETE (soft delete)
router.delete("/:id",protect, courseController.deleteCourse);

module.exports = router;
