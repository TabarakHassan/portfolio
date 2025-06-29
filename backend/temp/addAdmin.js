const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../Models/user.model');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    // delete any admin before
    await Admin.deleteOne({ email: "tabarak@portfolio.com" });
   // to hash pass in db more secure
    const admin = new Admin({
      email: "tabarak@portfolio.com",
      password: "123456"
    });

    await admin.save();
    console.log(" Admin created successfully");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(" Error creating admin:", err);
  });
//"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//eyJ1c2VySWQiOiI2ODYwNTBlNjI1MmZkYmQ3ZWRmNGI2MGMiLCJpYXQiOjE3NTExNDI2ODMsImV4cCI6MTc1MTc0NzQ4M30.
//pSqp_7ucGieSMQoT_kXmQaXUYvy4DnxCgUl3ZAEYC7I"}