const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const ItemSchema = new mongoose.Schema({

    itemID : {
        type : String,
        required : true,
        trim : true
    },
    itemName : {
        type : String,
        required : true,
        trim : true
    },
    itemDesc : {
        type : String,
        required : true,
        deafult : ""
    },
    ownerID : {
        type : String,
        required : true,
        trim : true
    },
/*     itemType : {
    	type : String,
    	required : true,
    	trim : true
    },
    itemCondition : {
    	type : String,
    	required : true,
    	trim : true
    }, */
    photos : {
        type : [String]
    }

// more schema attributes???
// price?
// availability?
});

ItemSchema.plugin(timestamp);

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;