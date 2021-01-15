import express from 'express';
let app = express();
let port = 3000;

app.get('/', function (req, res) {
    res.send('Welcome');
});

app.get('/welcome', function (req, res) {
    res.send('Welcome to my world!');
});

app.get('/goodbye', function (req, res) {
    res.send('See you later!');
});


app.listen(port, function () {
    console.log('The server is running at port:' + port);
});





// var express = require('express');
// var app = express();
// var port = 3000;

// app.get('/', function (req, res) {
//     res.send('Welcome');
// });

// app.get('/welcome', function (req, res) {
//     res.send('Welcome to my world!');
// });

// app.get('/goodbye', function (req, res) {
//     res.send('See you later!');
// });

// app.listen(port, function () {
//     console.log('The server is running at port:' + port);
// });










