const logger = require('../utils/logger');

function errorHandler(err, req, res, next) {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {}  // Show detailed error only in development
  });
}

module.exports = errorHandler;
