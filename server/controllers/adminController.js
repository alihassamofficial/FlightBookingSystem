const responseHandler = require("../responseHandler");

module.exports = {
  create: (req, res) => {
    try {
      return responseHandler(res, { data: "1" });
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  get: (req, res) => {
    try {
      return responseHandler(res, { data: "1" });
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};
