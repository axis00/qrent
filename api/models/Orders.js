const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const OrdersSchema = new mongoose.Schema({

// add orders attributes
});

OrderSchema.plugin(timestamp);

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;