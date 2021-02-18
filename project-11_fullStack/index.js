const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI); // MongoDB access through mongoose

const app = express();  //Represents a running express app

// Create a cookie for Passport to use to handle session
app.use(
    cookieSession({
        // days * 24hours * 60min * 60sec * 
        maxAge: 30 * 24* 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// Tell passport to use cookie to handle session
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); 

const PORT = process.env.PORT || 5000;  
app.listen(PORT);  //Navigate to localhost:5000 