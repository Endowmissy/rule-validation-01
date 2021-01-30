const { get_data_to_val, validate_condition } = require("../helpers/validator");
const {
  successResponse,
  errorResponse,
} = require("../helpers/responseHandler");

const dataValidation = (req, res) => {
  try {
    // validates invalid JSON payload
    if(!req.body.rule || !req.body.data) {
      return errorResponse("Invalid JSON payload passed", 400, null, res)
    }

    let _rule = req.body.rule;
    let _data = req.body.data;
  
    let data_to_val = _rule.field.split(".");

    let val_data = get_data_to_val(_data, data_to_val);

    // validates required field
    if (!req.body.rule.field) {
      return errorResponse("field is required", 400, null, res);
    }
    if (!req.body.rule.condition) {
      return errorResponse("condition is required", 400, null, res);
    }
    if (!req.body.rule.condition_value) {
      return errorResponse("condition_value is required", 400, null, res);
    }

    //validates if the field specified in the rule object is missing from the data passed
    if (!val_data) {
      return errorResponse(
        `field ${_rule.field} is missing from the data`,
        400,
        null,
        res
      );
    }

    // validates if field is of the wrong type
    if (typeof _rule.condition_value != typeof val_data) {
      return errorResponse(
        `field should be a ${typeof _rule.condition_value}`,
        400,
        null,
        res
      );
    }

    let status = validate_condition(
      val_data,
      _rule.condition,
      _rule.condition_value
    );

    if (status) {
      return successResponse(
        `field ${_rule.field} successfully validated`,
        200,
        {
          validation: {
            error: false,
            field: `${_rule.field}`,
            field_value: val_data,
            condition: `${_rule.condition}`,
            condition_value: `${_rule.condition_value}`,
          },
        },
        res
      );
    } else {
      return errorResponse(
        `field ${_rule.field} failed validation`,
        400,
        {
          validation: {
            error: true,
            field: `${_rule.field}`,
            field_value: val_data,
            condition: `${_rule.condition}`,
            condition_value: `${_rule.condition_value}`,
          },
        },
        res
      );
    }
  } catch (validationError) {
    return errorResponse("An error occured", 400, null, res)
  }
};

module.exports = dataValidation;

