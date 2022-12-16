// Error handler not found
const notFound = async (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error handler
const errorHandler = async (error, req, res, next) => {
  const status = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(status);
  res.json({
    message: error?.message,
    stack: error?.stack,
  });
};

module.exports = { notFound, errorHandler };
