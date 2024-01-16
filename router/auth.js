const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");

const User = require("../model/userSchema");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/contact", async (req, res) => {
  const { name, email, phone, text} = req.body;

  if (!name || !email || !phone || !text) {
    return res.status(422).json({ error: "Please fill in all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(420).json({ error: "Email already exists" });
    }

    const user = new User({ name, email, phone, text });

    const saveMethod = await user.save();
    if (saveMethod) {
      // Redirect to the thank-you page
      return res.redirect("/thank-you");
    } else {
      return res.status(500).json({ message: "Failed to register" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to register" });
  }
});

module.exports = router;