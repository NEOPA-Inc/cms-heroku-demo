var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/target')));

app.use('/', require('./routes/'));
app.use('/api/v1/info', require('./routes/v1/info.js'));

module.exports = app;
