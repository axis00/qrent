const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

module.exports = new mongoose.Schema({
    item : {
        type : Object,
        require : true
    }

    // TODO: add more attributes 
});