var userModel = require('../model/user/user.model.server');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");


module.exports = function (app) {

  //HTTP methods for users below
  app.post("/api/user", createUser);
  app.get("/api/username", findUserByUsername);
  app.get("/api/user", findUserByCredentials);
  app.get('/api/user/:uid', findUserById)
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);

  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  //app.post('/api/loggedIn', loggedIn);

  var facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID || 473830713359097,
    clientSecret: process.env.FACEBOOK_SECRET_ID || 'fed70fcdecca58d1568e9177275471ce',
    callbackURL: process.env.FACEBOOK_CALLBACK || '/auth/facebook/callback'
  }

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/#/login',
      successRedirect: '/#/MyAccount'
    }));

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function(user){
        done(null, user);
      },
      function(err){
        done(err, null);
      }
    );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.json(200);
  }

  //would like to check to make sure username isn't taken but when doing userModel.findByUserName
  //I get a typeerror
  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user).then(
      function(user){
        if(user){
          req.login(user, function(err) {
            if(err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      });
  }

  function loggedIn(req, res){
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function localStrategy(username, password, done) {
    console.log("Printing from inside local strategy");
    console.log(username);
    console.log(password);
    userModel.findUserByUserName(username).then(
      function(user) {
        console.log(user);
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function(error) {
        res.send(400).send(error);
      }
    );
  }

  function facebookStrategy(token, refreshToken, profile, done){
    userModel.findFBUser(profile.id)
      .then(
        function(user) {
          if(user) {
            console.log('user');
            return done(null, user);
          } else {
            console.log('profile');
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              username: names[0]+' '+names[1],
              lastName: names[1],
              firstName: names[0],
              email: profile.emails ? profile.emails[0].value:"",
              facebook: { id: profile.id, token: token } };
            return userModel.createUser(newFacebookUser);
          }
        }, function(err) {
          if (err) {
            return done(err);
          } } );
  }

  function createUser(req, res) {
    console.log(req.body);
    const user = req.body;
    //const user = { username: req.body.username, password: req.body.password};
    userModel.createUser(user)
      .then(
        function (user) {
          res.send(user);
        }, function(error){
          console.log("Error creating user:" + error);
          res.status(400);

        });
  }

  function findUserById(req, res){
    const userId = req.params['uid'];
    userModel.findUserById(userId)
      .then(
        function(user){

          res.send(user);
        }, function(error){
          console.log("Error finding user" + error);
          res.status(400).send(error);

        });
  }

  function findUserByCredentials(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];

    console.log(username)
    console.log(password)

    userModel.findByCredentials(username, password)
      .then(
        function(user){
          console.log(user)
          res.send(user);
        }, function(error){
          console.log("Error finding user by credentials" + error);
          res.status(400);
        });
  }

  function findUserByUsername(req, res) {
    var username = req.query["username"];

    userModel.findUserByUserName(username)
      .then(
        function(user){
          res.send(user);
        }, function(error){
          console.log("Error finding user by username:" + error);
          res.status(400).send(error);
        });
  }

  function updateUser(req, res) {
    var userId = req.params['uid'];
    var user = req.body;

    userModel.updateUser(userId,user)
      .then(
        function(user) {
          res.send(user);
          console.log(user);
        }, function (error) {
          console.log("Error updating user:" + error);
          res.status(400).send(error);
        }
      );
  }

  function deleteUser(req, res) {
    const userId = req.params['uid'];

    userModel.deleteUser(userId)
      .then(
        function(user) {
          res.send(user);
        }, function (error) {
          console.log("Error deleting user:" + error);
          res.status(400).send(error);
        }
      );
  }
}
