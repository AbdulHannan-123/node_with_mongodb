// create the mongoose model you need to follow the few steps
// 1. define scheme
// 2. create model -> model requirs 2 things <Model_name>, <Scheme> 

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({    // you need to pass a map/obj in the argument of schema
     // now you need to tell what happens here
     id:{   // giving some details to id
        type : String,        // declares its data type
        unique : true,        //is must be unique ristrict duplications  
        required : true,        // its nesseory
     },
     userid :{
        type : String,
        required : true,
     },
     userid :{
        type : String,
        required : true,
     },
     title :{
        type : String,
        required : true,
     },
     content :{
        type : String,
     },
     dateadded :{
        type : Date,
        default : Date.now,
     }
});

// lets create the model after schema

 module.exports= mongoose.model("Note", noteSchema);   // Note k naam se ye model ab availabel hojaega hr jagah but before that you neet to export

