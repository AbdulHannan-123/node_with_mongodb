// INITIALIZATION
// we have to tell the server that we need the express

const express = require('express');   //we call the the express and stoer it in a variable   OR we call the instance
const app = express();    // we call express as function  and stroe it in app      // express me server bn chuka ha

const mongoose = require('mongoose');   // by using this i can connect the my mongoDB

mongoose.connect('mongodb+srv://ali:ali123@cluster0.xtv74tc.mongodb.net/notesdb')     // need to pass the connection string
    .then(function () {     // when connection success then show these pages outher wise dont
        app.get("/", function (req, res) {
            res.send("This is the homepage_2");
        });

        app.get("/notes", function (req, res) {
            res.send("This is the nodespage");
        });
    });


// Starting the server on a port
app.listen(5000, function () {      // this is a port number to hamari app port 5000 pr run hojaegi it also give optional callback function // app 5000 pr run hojati ha to ye wala function auto run hojaega
    console.log("server 2 is startted")
});