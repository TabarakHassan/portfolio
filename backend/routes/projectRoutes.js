const projectC = require("../controllers/projectController");
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerConfig");
const protect = require("../middlewares/authMidelware");

//inject image folder (Middleware to tell multer we're in "projects" )
const setProjectFolder = (req, res, next) => {
  req.folder = "projects";
  next();
};
  

//get project
router.get("/",projectC.getAllProjects);

//get prjectById
router.get("/:id",projectC.getProjectById);

//put update project
router.put("/:id",protect,setProjectFolder,upload.single('image'),protect,
projectC.updatProject);

//post create project
router.post("/",protect,setProjectFolder,upload.single('image'),protect,
projectC.createProject);

//delete project
router.delete("/:id",protect,projectC.deleteProject);


module.exports = router;


