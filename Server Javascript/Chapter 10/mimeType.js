const express = require('express');
const fs = require('fs');
const {request} = require("express");
const app = express();

app.get('/image', (request, response) => {
    fs.readFile('sammsek.png', (error, data) => {
        response.type('image/png');
        response.send(data);
    });
});
app.get('/audio', (request, response) => {
    fs.readFile('kid_laugh.wav', (error, data) => {
        response.type('audio/wav');
        response.send(data);
    });
});
app.listen(52276, ()=>{
    console.log('Server running at http://127.0.0.1:52276');
});