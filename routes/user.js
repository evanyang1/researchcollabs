const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const JWT_EXPIRY_TIME = 30 * 60 * 60 * 24; // 30 days

// use this for running async functions
function runAsyncWrapper(callback) {
    return function (req, res, next) {
      callback(req, res, next).catch(next);
    };
}

// User Login
router.post('/login', async (req, res) => {
    const email = req.body.email;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send('No user with this email');
      } else if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(400).send('Incorrect Password');
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
            .cookie('token', token, { httpOnly: true })
            .json(user);
        },
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
