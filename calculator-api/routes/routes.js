const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require('../models/users');
const Login = require('../models/login');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const data = new Login({
          username: username,
          status: true,
          createdAt: new Date(),
          logoutTime: new Date(),
        })
        const dataToSave = await data.save();
        const token = jwt.sign({ user_id: dataToSave._id }, process.env.SECRET_KEY);
        res.status(200).send({
          message: "succes",
          data: { id: dataToSave._id, username, token }
        });
      } else {
        res.status(401).send({
          message: "wrong password",
        });
      }
    } else {
      res.status(401).send({
        message: "username not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(err).send({ status: false });
  }
})

router.post('/logout', async (req, res) => {
  try {
    const { id } = req.body;
    const login = await Login.findOne({ _id: id, status: true });
    if (login) {
      const filter = { _id: id };
      const update = { status: false, logoutTime: new Date(), };
      const result = await Login.findOneAndUpdate(filter, update);

      res.status(200).send({
        message: "succes",
        data: result
      });
    } else {
      res.status(401).send({
        message: "id not exist or already log out",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(err).send({ status: false });
  }
})

router.get('/auth', async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (token) {
      const data = jwt.verify(token, process.env.SECRET_KEY);
      const login = await Login.findOne({ _id: data.user_id, status: true });
      if (login) {
        res.status(200).send({
          message: "succes",
          data: { id: data.user_id, username: login.username, token }
        });
      } else {
        res.status(401).send({
          message: "id not exist or already log out",
        });
      }
    } else {
      res.status(401).send({
        message: "not authenticated",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(err).send({ status: false });
  }
})

module.exports = router;
