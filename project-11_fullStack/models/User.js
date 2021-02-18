const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   googleId: String
});

mongoose.model('users', userSchema); // two arguments means we are trying to load something into MongoDB