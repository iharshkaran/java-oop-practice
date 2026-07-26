require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./src/db/db");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/auth.route");
const noteRoutes = require("./src/routes/note.route");
const cookieParser = require("cookie-parser");

const app = express(); // Standalone Express app

// Middlewares
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true                
}));
app.use(cookieParser());
app.use(express.json());

// Connect Database
connectToDB();


// Routes
app.use("/auth", authRoutes);
app.use("/", noteRoutes);


// Handle Undefined/Wrong Routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});