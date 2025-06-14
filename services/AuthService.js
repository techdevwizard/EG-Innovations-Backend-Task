const bcrypt = require("bcryptjs");
const userRepository = require("../repository/AuthRepository");
const { generateToken } = require("../utilities/jwttoken");

exports.login = async ({ username, password }) => {
  const user = await userRepository.findByUsername(username);
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken({ username });
      return { token, username };
    } else {
      throw new Error("Password is invalid");
    }
  } else {
    throw new Error("Username does not exist");
  }
};