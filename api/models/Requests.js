const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const RequestsSchema = new mongoose.Schema({

	rentedBy : {
		type : String,
		required : true,
		trim : true
	},
	itemID : {
		type : String,
		required : true
	}

	// more attributes for orders
});

RequestSchema.plugin(timestamp);

const Request = mongoose.model('Request', RequestSchema);
module.exports = Request;