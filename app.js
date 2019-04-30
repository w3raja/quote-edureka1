const express =require('express');

const app = express();

let tasks = require('./quotes.js');



app.get('/random',function(req,res){


const randomTask= tasks[Math.floor(Math.random()*tasks.length)+1];
res.send(randomTask);

});

// app.get('/',function(req,res){

//     res.send("<h1>server is now sent the response to the request created by the user</h1>");
//     console.log("server is now sent the response to the request created by the user");

// });

// app.get('/ilayaraja', function(req,res){

//     // res.json(tasks[2]);
//     console.log("ilayaraja is activated");
//     // res.sendFile( __dirname ,'./public/index.html');

//     res.sendFile(__dirname + '\\public\\index.html');
// })



module.exports = app;