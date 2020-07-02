const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, resp) =>{
   resp.send('IT"S KILLING ME');
});

app.get('/caketime', (req, resp) =>{
   resp.send('HAVE SOME CAKE')
})

app.get('/autodeploy', (req, resp) =>{
   resp.send('IT WORKED');
});

app.get('/anotherone', (req, resp)=>{
   // what's in the request?

   resp.send('YOU LOYAL');

});


module.exports = app;


