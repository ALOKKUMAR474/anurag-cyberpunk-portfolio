export function errorHandler(error, _request, response, _next) {
  const statusCode = response.statusCode && response.statusCode !== 200 ? response.statusCode : 500;

  response.status(statusCode).json({
    success: false,
    message: error.message || "Server error"
  });
}
