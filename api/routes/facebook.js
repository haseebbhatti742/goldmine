const express = require('express');
const router = express.Router();
const facebookConfigAuth = require("../../facebook-auth");

var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;

//let app = require("../../app");

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
// /auth/facebook/callback
router.get('/', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/callback',
    passport.authenticate('facebook', { 
        successRedirect: '/',
        failureRedirect: '/login-form' 
    })
);

var fbOpts = {
    clientID: facebookConfigAuth.facebookAuth.clientID,
    clientSecret: facebookConfigAuth.facebookAuth.clientSecret,
    callbackURL: facebookConfigAuth.facebookAuth.callbackURL
  }; 

passport.use(new FacebookStrategy(fbOpts, function(accessToken, refreshToken, profile, done) {
    console.log(profile);
  }
));

module.exports = router;