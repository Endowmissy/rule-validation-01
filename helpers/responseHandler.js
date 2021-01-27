const successResponse = (message, statusCode, data = {}, res) => {
    res.status(statusCode).json({message, status: 'success', data });
  };

module.exports = successResponse;
  