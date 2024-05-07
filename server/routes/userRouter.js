const express = require("express");
const { authenticateJwt, SECRET } = require("../middleware/auth");
const { User, Provider } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const found = await User.findOne({ email: req.body.email });
    if (found) {
      return res
        .status(403)
        .json({ status: "Error", error: "Duplicate Email" });
    } else {
      const UserData = {};
      for (const key in req.body) {
        if (req.body.hasOwnProperty(key) && req.body[key]) {
          UserData[key] = req.body[key];
        }
      }
      UserData.password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create(UserData);
      const token = jwt.sign({ userId: user.id }, SECRET, {
        expiresIn: "5h",
      });
      return res.json({
        status: "Success",
        message: "User created successfully",
        token,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ status: "Error", error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  let user;
  user = await User.findOne({ email: req.body.email });
  if (!user) {
    user = await Provider.findOne({ email: req.body.email });
  }
  if (!user) {
    return res.status(401).json({ status: "Fail", message: "Invalid email" });
  }
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  console.log(req.body.password, user.password, isPasswordValid);
  if (isPasswordValid === false) {
    return res
      .status(401)
      .json({ status: "Fail", message: "Invalid password" });
  } else {
    const token = jwt.sign({ userId: user.id }, SECRET, {
      expiresIn: "5h",
    });
    return res.json({
      status: "Success",
      message: "User logged in successfully",
      token: token,
    });
  }
});

module.exports = router;
