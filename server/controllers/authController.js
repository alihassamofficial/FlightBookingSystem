require("dotenv").config();
const responseHandler = require("../responseHandler");
const { getUser } = require("../database/models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const isExist = await getUser({ username, userId: false });
      if (isExist.error || !isExist.data) {
        res.cookie("auth", undefined, { maxAge: 30000, httpOnly: true });
        return responseHandler(res, {
          error: { message: "User not found", statusCode: 404 },
        });
      }

      const isValid = await compare(password, isExist.data.dataValues.password);
      if (!isValid) {
        res.cookie("auth", undefined, { maxAge: 30000, httpOnly: true });
        return responseHandler(res, {
          error: { message: "Invalid credentials", statusCode: 401 },
        });
      }

      delete isExist.data.dataValues.password;

      const token = sign(isExist.data.dataValues, process.env.SECRET, {
        expiresIn: 30000, // 30 seconds
      });

      res.cookie("auth", token, { maxAge: 30000, httpOnly: true });

      return responseHandler(res, { data: { token } });
    } catch (error) {
      return responseHandler(res, { error });
    }
  },
};
