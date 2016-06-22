'use strict';
// get all the tools we need
require('./config/connect');
const express  = require('express');
const app      = express();
const port     = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
const app_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const mongoose = require('mongoose');
const passport = require('passport');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const jsonParser = bodyParser.json();
const session      = require('express-session');



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
app.listen(port,app_ip_address, (err) => {
    if(err) console.log(err)
    console.log('The magic happens on port ' + port);
    console.log('Press ctrl + c to stop the server, and Mongo instance'); 
});
    module.exports = app;