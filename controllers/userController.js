const User = require("../model/userModel.js");

exports.home = (req, res) => {
  res.send("Hello World");
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateuser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findByIdAndUpdate(userId, req.body);
    res.status(200).json({
      status: true,
      message: "User Updated succesfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    
    res.status(200).json({
        success: false,
        message: "User deleted succesfully",
      });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: true,
      users,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
