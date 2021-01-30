const { successResponse } = require("../helpers/responseHandler");

let details = {
    "name": "Ayomikun Emmanuel",
    "github": "@Endowmissy",
    "email": "adeolaayo311@gmail.com",
    "mobile": "08167144748",
    "twitter": "@hayycreationz"
}

const getMydetails = (req, res) => {
    return successResponse("My Rule-Validation API", 201, details, res);
}
module.exports =  getMydetails ;