const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Note = require("../models/note.model");
const mongoose = require("mongoose");


const authMiddleware = (req, res, next) => {
    // Headers ki bajaye cookies se token padho
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Pehle login kariye!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Isme userId mil gaya
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid ya Expired Token" });
    }
};


// Create Note
router.post("/notes", authMiddleware, async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required."
        });
    }

    try {
        const newNote = await Note.create({ title, content, user: req.user.userId || req.user.id });
        res.status(201).json({
            message: "Note added successfully",
            note: newNote,
            user: req.user.id  // User ID from the token
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while adding note",
            error: err.message
        });
    }
});

// Get All Notes
router.get("/notes", authMiddleware, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
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
router.delete("/notes/:id", authMiddleware, async (req, res) => {
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
router.patch("/notes/:id", authMiddleware, async (req, res) => {
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

module.exports = router;