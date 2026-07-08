const User = require("../models/user.js")
const filterObj = require("../utils/filterObj.js")
const catchAsync = require("../utils/catchAsync.js");

exports.updateMe = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "about",
    "avatar"
  );

  const userDoc = await User.findByIdAndUpdate(req.user._id, filteredBody , {
    new : true,
    validateModifiedOnly: true
  });

  res.status(200).json({
    status: "success",
    data: userDoc,
    message: "User Updated successfully",
  });
});