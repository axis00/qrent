const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const OrdersSchema = new mongoose.Schema({

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

OrderSchema.plugin(timestamp);

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;