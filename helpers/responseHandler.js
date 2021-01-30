const successResponse = (message, statusCode, data = {}, res) => {
  return res.status(statusCode).json({ message, status: 'success', data });
};

const errorResponse = (message, statusCode, data = {}, res) => {
  console.log(res)
  return res.status(statusCode).json({ message, status: 'error', data });
};

module.exports = { successResponse, errorResponse };
  