module.exports = (res, result) => {
  try {
    if (result.error) {
      // Handle Error object or string message
      const errorMessage =
        result.error.message || result.error || "An unexpected error occurred";

      const statusCode = result.error.statusCode || 400; // Default to 400 for bad requests
      return res.status(statusCode).send({
        status: statusCode,
        data: {},
        error: {
          message: errorMessage,
        },
      });
    }

    // Success response
    return res.send({
      status: 200,
      data: result.data,
      error: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      data: {},
      error: {
        message: "Internal server error",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
    });
  }
};
