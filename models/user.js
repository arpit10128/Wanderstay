const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

// You're free to define your User(userSchema) how you like.
// Passport-Local Mongoose will add a username, hash and salt field to store the username,
// the hashed password and the salt value.