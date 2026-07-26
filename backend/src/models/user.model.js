const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,      // Same email se 2 account banne se rokega
        lowercase: true,    // Auto small letters me convert kar dega
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;