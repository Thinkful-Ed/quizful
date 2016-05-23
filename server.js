// get all the tools we need
require('./config/connect');
var express  = require('express');
var app      = express();
var port     = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var app_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var mongoose = require('mongoose');
var passport = require('passport');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var jsonParser = bodyParser.json();
var session      = require('express-session');



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
// required for passport
app.use(session({ secret: 'quizApp', cookie: { maxAge: 360000 },resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(express.static('views'));

// routes ======================================================================
require('./routes/questions.js')(app,jsonParser)

// launch ======================================================================
app.listen(port,app_ip_address);
console.log('The magic happens on port ' + port);