const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema({

    userName : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true,
        trim : true
    },
    lastName : {
        type : String,
        required : true,
        trim : true
    },
    isOwner : {
        type : Boolean,
        required : true,
        default : false
    }

});

UserSchema.plugin(timestamp);

const User = mongoose.model('User', UserSchema);
module.exports = User;