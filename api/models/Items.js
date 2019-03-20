const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const ItemSchema = new mongoose.Schema({

    itemName : {
        type : String,
        required : true,
        trim : true
    },
    itemOwner : {
        type : String,
        required : true,
        trim : true
    },
    itemType : {
    	type : String,
    	required : true,
    	trim : true
    },
    itemCondition : {
    	type : String,
    	required : true,
    	trim : true
    }

// more schema attributes???
});

ItemSchema.plugin(timestamp);

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;