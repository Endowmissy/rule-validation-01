const express = require("express");
const details = require("../data/details")
const successResponse = require("../helpers/responseHandler")
const router = express.Router();

router.get("/", (req, res) => {
    return successResponse("My Rule-Validation API", 201, details, res)
})

module.exports = router;