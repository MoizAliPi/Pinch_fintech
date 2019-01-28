const mongoose = require('mongoose');
const schema = mongoose.schema;

//create Schema
const UserSchema = ({
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('user', UserSchema);