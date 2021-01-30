function get_data_to_val(data, rule_field) {
  let data_type = data_validate(data);
  let val = "";
  if (data_type == "String") {
    val = data;
  } else if (data_type == "Array") {
    val = data[parseInt(rule_field)]; //data[5]
  } else {
    val =
      rule_field.length == 1
        ? data[rule_field[0]] //card ==[card] =data[card]
        : rule_field.length == 2
        ? data[rule_field[0]][rule_field[1]] //card.first ==[card,first] =data[card][first]
        : data[rule_field[0]][rule_field[1]][rule_field[2]]; //card.first.second // [card,first,second] = data[card][first][sec]
  }
  return val;
}

// validate condition value against data using condition provided
function validate_condition(val_data, rule_condition, condition_value) {
  if (rule_condition == "eq") {
    if (val_data == condition_value) {
      return true;
    }
  }
  if (rule_condition == "neq") {
    if (val_data != condition_value) {
      return true;
    }
  }
  if (rule_condition == "gt") {
    if (val_data != condition_value) {
      return true;
    }
  }
  if (rule_condition == "gte") {
    if (val_data >= condition_value) {
      return true;
    }
  }
  if (rule_condition == "contains") {
    if (val_data.includes(condition_value)) {
      return true;
    }
  }
  return false;
}

let stringConstructor = "".constructor;
let arrayConstructor = [].constructor;
let objectConstructor = {}.constructor;

// check if data field is a valid JSON object, Array or String
function data_validate(field) {
  if (field.constructor === stringConstructor) {
    return "String";
  }
  if (field.constructor === arrayConstructor) {
    return "Array";
  }
  if (field.constructor === objectConstructor) {
    return "Object";
  }
  return "Not valid";
}

module.exports = { get_data_to_val, validate_condition, data_validate };
