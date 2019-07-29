var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
const router = express.Router();
//api's
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//Rotas
const index = require('./routes/index');
app.use('/', index);
const dados = require('./routes/dadosRoute');
app.use('/dados', dados);

//apis
app.set('view engine', 'ejs');
app.set('layout', 'views/layout'); // defaults to 'layout'
app.set("layout extractScripts", true); 
app.use(expressLayouts);
//SETAR A PORRA DOS LINKS ESTATICOS
app.use(express.static('public'))
module.exports = app;

/*
 * https://expressjs.com/pt-br/advanced/best-practice-security.html
 * $ npm install --save helmet
 * var helmet = require('helmet');
 * app.use(helmet());
 */