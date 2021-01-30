const express = require("express");
const getMyDetails = require("../controller/details");
const dataValidation = require("../controller/validation")
const router = express.Router();

router.get("/", getMyDetails);

router.post("/validate-rule", dataValidation);
  
module.exports = router;
