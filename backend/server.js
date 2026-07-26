require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./src/db/db");
const authRoutes = require("./src/routes/auth.route");
const noteRoutes = require("./src/routes/note.route");
const cookieParser = require("cookie-parser");

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Dynamic CORS URL
    credentials: true                                            // Allow cookies
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});