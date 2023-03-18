// INITIALIZATION
// we have to tell the server that we need the express

const express = require('express');   //we call the the express and stoer it in a variable   OR we call the instance
const app = express();    // we call express as function  and stroe it in app      // express me server bn chuka ha

const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));

//if extended true hoga to tou nented objects de skty hain
// if  flase nented objects ko solve nhi karayga              // obj k ander obj
// {
//     Object:{

//     }
// }

app.use(bodyParser.json());

const mongoose = require('mongoose');   // by using this i can connect the my mongoDB

mongoose.connect("mongodb+srv://ali:ali123@cluster0.xtv74tc.mongodb.net/notesdb")     // need to pass the connection string
    .then(function () {     // when connection success then show these pages outher wise dont
        app.get("/", function (req, res) {
            // res.send("This is the homepage_2");
            const response = {message : "Api Works!"};
            res.json(response);
        });   

        app.post("/notes/list", async function (req, res) {      // to find the user by userid dynamically 
            var notes = await Note.find({ userid : req.body.userid});   // find all type Note in db not fint userid wit given user id
            res.json(notes);
        });
        app.get("/notes/list/all", async function (req, res) {      // to find the user by userid dynamically 
            var notes = await Note.find();   // find all type Note in db not fint userid wit given user id
            res.json(notes);
        });

        // app.get("/notes/add", async function (req, res) {   its uses the user to ender by hand
        app.post("/notes/add", async function (req, res) {

            await Note.deleteOne({ id : req.body.id});

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

        app.post("/notes/delete", async function(req,res){
            await Note.deleteOne({ id : req.body.id});
            const response = {message: "node deleted " + `id: ${req.body.id}`};  //after the data added this message is shown to user

            res.json(response);
        });
    });


// Starting the server on a port
app.listen(5000, function () {      // this is a port number to hamari app port 5000 pr run hojaegi it also give optional callback function // app 5000 pr run hojati ha to ye wala function auto run hojaega
    console.log("server 2 is startted")
});