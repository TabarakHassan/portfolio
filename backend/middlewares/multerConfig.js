const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "uploads/others"; // default

    if (req.folder === "projects") folder = "uploads/projects";
    else if (req.folder === "about") folder = "uploads/about";
    else if (req.folder === "cv") folder = "uploads/cv";
    else if (req.folder === "courses") folder = "uploads/courses";

    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only image and PDF files are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
