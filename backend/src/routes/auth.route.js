const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// Cookie Configuration Options
const cookieOptions = {
  httpOnly: true,
  secure: true,      // Render (HTTPS) ke liye mandatory
  sameSite: "none",  // Cross-domain ke liye mandatory
};

// Register User
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists." });
        }

        const newUser = await User.create({ username, email, password });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

        // Send Secure Cookie
        res.cookie("token", token, cookieOptions);

        // FIX: Token JSON body mein bhi return karo (Safari/iPhone ke liye)
        res.status(201).json({
            message: "User registered successfully",
            token, 
            user: newUser
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while registering user",
            error: err.message
        });
    }
});


// Login User
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        // Send Secure Cookie
        res.cookie("token", token, cookieOptions);

        // FIX: Token JSON body mein bhi return karo (Safari/iPhone ke liye)
        res.status(200).json({
            message: "User logged in successfully",
            token,
            user
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while logging in user",
            error: err.message
        });
    }
});

module.exports = router;