const mongoose = require('mongoose');
const schema = mongoose.schema;

//create Schema
const FileSchema = ({
    fileName : {
        type: String,
        required: true
    },
    fileURI : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = File = mongoose.model('file', FileSchema);