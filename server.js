// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(session({
  secret: 'secret test',
  resave: true,
  saveUninitialized: true
}));

app.use(session({ secret: process.env.SESSION_SECRET }));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/WebDevProject')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

//Database requirements
var connectionString = 'mongodb://127.0.0.1:27017/webDevFinal';
//var connectionString = process.env.MONGODB_URI;

/** To use database var connectionString = process.env.MONGODB_URI;
*/
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const client = mongoose.connect(connectionString, {useNewURLParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

require('./server/app')(app);
