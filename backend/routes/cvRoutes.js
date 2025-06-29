const express = require("express");
const router = express.Router();
const uploadCV = require("../middlewares/multerCV");
const protect = require("../middlewares/authMidelware");

// POST /api/cv/upload
router.post("/upload",protect, uploadCV.single("cv"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const fileUrl = `/uploads/cv/${req.file.filename}`;
  res.status(200).json({ message: "CV uploaded", fileUrl });
});

module.exports = router;
