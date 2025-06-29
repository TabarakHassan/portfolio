const About = require("../Models/about.model");

//get about data
const getAbout = async (req,res)=>{
    const about =await About.findOne();
    res.json(about);
}

//create about data
// const createAbout = async (req, res) => {
//     const about = await About.create(req.body);
//     res.status(201).json(about);
//   };
  
//update about data
//func check first 
//if not exist it create new one {upsert:true} and if exist it updated

const updateAbout = async (req, res) => {
    const bodyData = req.body;
  
    if (req.files?.image) {
      bodyData.image = req.files.image[0].filename;
    }
  
    if (req.files?.cv) {
      bodyData.cv = req.files.cv[0].filename;
    }
    
  
    const updated = await About.findOneAndUpdate({}, bodyData, {
      new: true,
      upsert: true,
    });
  
    res.json(updated);
  };
  
module.exports = {getAbout,updateAbout};