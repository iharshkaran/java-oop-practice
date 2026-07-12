require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/db/db");
const Note = require("./models/note.model")
const app = require("./src/app");

connectToDB();


app.post("/notes", async (req,res)=>{
    const{title,content} = req.body;

    await Note.create({
        title, content
    })
    res.json({
        message:"Notes added Successfully"
    })
})

app.get("/notes", async(req,res)=>{
    const notes = await Note.find();

    res.json({
        message:"Notes Fetched Successfully",
        notes
    })
})

app.delete("/notes/:id", async(req,res)=>{
    const noteId = req.params.id;

    await Note.findByIdAndDelete({
        _id:noteId
    })

    res.json({
        message:"Notes Deteted Successfully",
    })
})

app.patch("/notes/:id", async(req,res)=>{
    const noteId = req.params.id;
    const title = req.body.title;

    await Note.findByIdAndUpdate({
        _id:noteId
    },{
        title:title
    })

    res.json({
        message:"Notes Updated Successfully",
    })
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})