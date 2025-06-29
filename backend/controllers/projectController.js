const Project = require("../Models/projects.model");


//get all projects
// const getAllProjects = async (req,res)=>{
//     const projects = await Project.find({ isActive:true });
//     res.status(200).json(projects);
// };
const getAllProjects = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
  
    const skip = (page - 1) * limit;
  
    try {
      const total = await Project.countDocuments({ isActive: true });
      const projects = await Project.find({ isActive: true })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });
  
      res.status(200).json({
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        projects
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching projects" });
    }
  };
  

//get product id
const getProjectById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const project = await Project.findOne({ _id: id, isActive: true });
  
      if (!project) {
        return res.status(404).json({ message: "Project not found or deactivated" });
      }
  
      res.json(project);
    } catch (err) {
      res.status(500).json({ message: "Invalid ID format" });
    }
  };
  

//create project
const createProject = async (req, res) => {
  try {
    const body = req.body;

  if (req.file) {
    body.image = req.file.filename;
  }

  const newProject = await Project.create(body);

    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//update project
const updatProject = async (req,res)=>{
    const {id} = req.params;
    const body = req.body;
    if (req.file) {
      body.image = req.file.filename;
    }
    const updated = await Project.findByIdAndUpdate(id, body,{new: true});
    res.json(updated);

};

//delete project (deactive project)
const deleteProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    res.json({ message: "project deactivated", project });
  };
  

module.exports = {getAllProjects,createProject,
    updatProject,deleteProject,getProjectById};
