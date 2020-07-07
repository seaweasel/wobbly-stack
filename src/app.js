const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.use(express.json());
//views engine and template location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));

app.get('', (req, resp) =>{
   resp.render('index.hbs');
})

app.get('/jumbotron', (req, resp) =>{
   resp.render('jumbotron.hbs');
});

module.exports = app;
