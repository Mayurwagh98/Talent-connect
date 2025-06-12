const User = require("../models/User");
const asyncHandler = require("../middleware/async");
// const sendEmail = require("../utils/sendEmail");
exports.registerUser = asyncHandler(async (req, res, next) => {
  const { email, password, role } = req.body;

  // Create user
  const user = await User.create({
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});
