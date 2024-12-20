require("dotenv").config;
const responseHandler = require("./responseHandler");
const { verify } = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const { auth } = req.cookies;
    if (auth == undefined) {
      return responseHandler(res, { error: "unauthorized user" });
    }

    verify(auth, process.env.SECRET, (error, data) => {
      if (error) {
        return responseHandler(res, { error: "Forbidden Access" });
      }
      console.log(error);
      console.log(data);
      next();
    });
  } catch (error) {
    console.error(error);
    return res.send({
      status: 400,
      data: {},
      error: error,
    });
  }
};
