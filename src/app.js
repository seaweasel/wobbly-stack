const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, resp) =>{
   resp.send('HELLOOOOOOOO NURSE');
});

app.get('/caketime', (req, resp) =>{
   resp.send('HAVE SOME CAKE')
})

app.get('/autodeploy', (req, resp) =>{
   resp.send('IT WORKED');
});


module.exports = app;


