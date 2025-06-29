const About = require("../controllers/aboutController");
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerConfig");
const protect = require("../middlewares/authMidelware");

//inject folder name
const setAboutFolder = (req, res, next) => {
    req.folder = "about";
    next();
  };

//get
router.get('/',About.getAbout);

//put
router.put('/',protect,setAboutFolder, upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'cv', maxCount: 1 }
]),About.updateAbout);


//router.post("/", createAbout);
module.exports = router;
