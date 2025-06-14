const authService = require("../services/AuthService");
const { decodeToken } = require("../utilities/jwttoken");


exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const isValidLogin = await authService.login({ username, password });
    return res.json(isValidLogin);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  return res.json({ name: req.user.username });``
};