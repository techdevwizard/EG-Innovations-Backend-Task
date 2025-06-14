const jwt = require("jsonwebtoken");
const { ENV } = require("../config/env");


exports.generateToken = (payload) => {
  return jwt.sign(payload, ENV.JWT_TOKEN, { expiresIn: "1m" });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, ENV.JWT_TOKEN);
};

exports.decodeToken = (token) => {
  return jwt.decode(token);
};