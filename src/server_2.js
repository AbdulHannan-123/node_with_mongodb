// INITIALIZATION
// we have to tell the server that we need the express

const express = require('express');   //we call the the express and stoer it in a variable   OR we call the instance
const app = express();    // we call express as function  and stroe it in app      // express me server bn chuka ha

const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

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

        const noteRouter = require('./routes/Note');
        app.use("/notes", noteRouter);

        
    });


// Starting the server on a port
const PORT = process.env.PORT || 5000;   // use the environment open port
app.listen(PORT, function () {      // this is a port number to hamari app port 5000 pr run hojaegi it also give optional callback function // app 5000 pr run hojati ha to ye wala function auto run hojaega
    console.log("server 2 is startted " + PORT);
});