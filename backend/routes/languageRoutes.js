const express = require("express");
const router = express.Router();
const langC = require("../controllers/languageController");
const protect = require("../middlewares/authMidelware");

router.get("/", langC.getAllLanguages);
router.post("/",protect, langC.createLanguage);
router.put("/:id",protect, langC.updateLanguage);
router.delete("/:id",protect, langC.deleteLanguage);

module.exports = router;
