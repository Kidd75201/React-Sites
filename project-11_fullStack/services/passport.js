const passport = require('passport');       // Gives express an idea how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy;  // How to handle authentication through Google
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // One argument means we are trying to retrieve something from MongoDB

// Mongoose user model instance, turned user into an ID
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Mongoose turn user ID into a user model instance
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

/*
    1. new GoogleStrategy() -> passes on some configs to authenticate users via Google
    2. passport.use() -> generic register (authenticate users via a new strategy)
*/
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
       // using promise for returned user
        User.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    // we already have a record with the given profile ID
                    done(null,existingUser);
                } else {
                    // we don't have a user record with this ID, make a new record
                    new User({ googleId: profile.id}).save()
                        .then(user => done(null, user));
                }
            })

    })
);