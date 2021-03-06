const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth')
require("dotenv").config();

const User = require("../models/User");

const JWT_EXPIRY_TIME = 30 * 60 * 60 * 24; // 30 days

// use this for running async functions
function runAsyncWrapper(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
}

// User Login
router.post("/login", async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("No user with this email");
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).send("Incorrect Password");
    }
    //Set up the jwt payload to user ID and email option
    const payload = {
      id: user._id,
      email,
    };

    // success -> Get a JWT Token
    jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: JWT_EXPIRY_TIME,
      },
      (err, token) => {
        if (err) throw err;
        return res
          .status(201)
          .cookie("token", token, { httpOnly: true })
          .json(user);
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/logout", async (req, res) => {
  try {
    res.clearCookie("token").send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// User Registration
router.post(
  "/signup",
  [
    check("email", "Email required").isEmail().trim(),
    check("password", "Password required").isLength({ min: 6 }),
  ],
  runAsyncWrapper(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      // Email must be unique
      let user = await User.findOne({ email });
      //if we find a user they already have an account
      if (user) {
        return res.status(400).json({ msg: "This user already exists" });
      }
      const salt = bcrypt.genSaltSync();
      const hashed_password = bcrypt.hashSync(password, salt);
      // REGISTER USER!!!
      user = new User({
        email,
        password: hashed_password,
      });
      await user.save();

      //Set up the jwt payload to user ID and email option
      const payload = {
        id: user._id,
        email,
      };

      // success -> Get a JWT Token
      //the payload is the data being encrypted
      jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: JWT_EXPIRY_TIME },
        (err, token) => {
          if (err) throw err;
          return res
            .status(201)
            .cookie("token", token, { httpOnly: true })
            .json(user);
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  })
);

router.get(
  "/get_current_user",
  auth,
  runAsyncWrapper(async function (req, res) {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    } else {
      return res.status(200).json(user);
    }
  })
);

module.exports = router;
