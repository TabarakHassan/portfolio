const Course = require("../Models/Cources.model");


// GET all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
};

// POST create course
const createCourse = async (req, res) => {
    try {
      const body = req.body;
  
      if (req.file) {
        body.image = req.file.filename;
      }
  
      const course = await Course.create(body);
      res.status(201).json(course);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
// PUT update course
const updateCourse = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
  
    if (req.file) {
      body.image = req.file.filename;
    }
  
    try {
      const updated = await Course.findByIdAndUpdate(id, body, { new: true });
      res.json(updated);
    } catch (error) {
      res.status(400).json({ message: "Error updating course" });
    }
  };
  

// DELETE soft delete
const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Course.findByIdAndUpdate(id, { isActive: false }, { new: true });
    res.json({ message: "Course deactivated", deleted });
  } catch (error) {
    res.status(400).json({ message: "Error deleting course" });
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse
};
