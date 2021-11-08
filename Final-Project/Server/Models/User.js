const mongoose = require('mongoose');


// Create User Schema

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

});
const User=mongoose.model('users', UserSchema);
module.exports = User

