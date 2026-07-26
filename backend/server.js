require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./src/db/db");
const Note = require("./models/note.model");
const mongoose = require("mongoose");

const app = express(); // Standalone Express app

// Middlewares
app.use(cors());
app.use(express.json());

// Connect Database
connectToDB();

// Create Note
app.post("/notes", async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required."
        });
    }

    try {
        const newNote = await Note.create({ title, content });
        res.status(201).json({
            message: "Note added successfully",
            note: newNote
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while adding note",
            error: err.message
        });
    }
});

// Get All Notes
app.get("/notes", async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({
            message: "Notes fetched successfully",
            notes
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while fetching notes",
            error: err.message
        });
    }
});

// Delete Note
app.delete("/notes/:id", async (req, res) => {
    const noteId = req.params.id;

    // Check if ID is a valid Mongo ObjectId
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(400).json({ message: "Invalid Note ID format" });
    }

    try {
        const deletedNote = await Note.findByIdAndDelete(noteId);
        
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while deleting note",
            error: err.message
        });
    }
});

// Update Note
app.patch("/notes/:id", async (req, res) => {
    const noteId = req.params.id;
    const { title, content } = req.body;

    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(400).json({ message: "Invalid Note ID format" });
    }

    try {
        // Correct syntax: directly pass noteId and `{ new: true }` to return updated doc
        const updatedNote = await Note.findByIdAndUpdate(
            noteId, 
            { title, content }, 
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({
            message: "Note updated successfully",
            note: updatedNote
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while updating note",
            error: err.message
        });
    }
});

// Handle Undefined/Wrong Routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});