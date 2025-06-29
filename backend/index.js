const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRouter = require("./routes/projectRoutes");
const cvRoutes = require("./routes/cvRoutes");
const aboutRouter = require("./routes/aboutRoutes");
const skillRoutes = require("./routes/skillRoutes");
const languageRoutes = require("./routes/languageRoutes");
const educationRoutes = require("./routes/educationRoutes");
const coursesRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");
const experienceRoutes = require("./routes/experienceRoutes");

//dotenv ready
dotenv.config();

//server ready
const app = express();
app.use(express.json());
app.use(cors());

//testing roots 
app.get("/",(req,res)=>{
    res.send('API is running...');
});

//connect to mongodb
connectDB();

// routes
app.use('/api/projects',projectRouter);
app.use('/uploads', express.static('uploads'));//http://localhost:8000/uploads/abc.png
app.use("/api/cv", cvRoutes);
app.use('/api/about',aboutRouter);
app.use("/api/skills", skillRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/admin", authRoutes);
app.use("/api/experiences", experienceRoutes);


//running server
const PORT = process.env.PORT ||5000;
app.listen(PORT, ()=>
console.log(`server running on PORT ${PORT}`));


