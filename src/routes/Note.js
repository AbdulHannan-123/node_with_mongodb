const express = require('express');
const router = express.Router();        // picking up the router from his directorey

const Node = require('./../models/Note');


router.post("/list", async function (req, res) {      // to find the user by userid dynamically 
    var notes = await Note.find({ userid : req.body.userid});   // find all type Note in db not fint userid wit given user id
    res.json(notes);
});
router.get("/list/all", async function (req, res) {      // to find the user by userid dynamically 
    var notes = await Note.find();   // find all type Note in db not fint userid wit given user id
    res.json(notes);
});

// app.get("/notes/add", async function (req, res) {   its uses the user to ender by hand
router.post("/add", async function (req, res) {

    await Note.deleteOne({ id : req.body.id})

    const newNote = new Note({
        id: req.body.id,     
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    });
    await newNote.save();    // this is also a promise

    const response = {message: "new node created " + `id: ${req.body.id}`};  //after the data added this message is shown to user

    res.json(response);
});

router.post("/delete", async function(req,res){
    await Note.deleteOne({ id : req.body.id});
    const response = {message: "node deleted " + `id: ${req.body.id}`};  //after the data added this message is shown to user

    res.json(response);
});



// now expoting the routes tou user all over

module.exports = router;



