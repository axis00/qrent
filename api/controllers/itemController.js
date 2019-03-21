const mongoose = require('mongoose');
const User = require('../models/User');
const Item = require('../models/Item');

module.exports = {
	createItem : function(itemID, itemName, itemDesc, ownerID, photos){
		const newItem = new Item({
			itemID,
			itemName,
			itemDesc,
			ownerID,
			photos
		});

		return new Promise( async (resolve,reject) => {
			try {
				const item = await newItem.save();
				resolve(item);
			} catch (error) {
				reject("Failed Writing to Database")
			}
		});
	},

	publishItem : function(item){
		const publishedItem = new publishedItem({
			item
		});

		return new Promise( async (resolve, reject) => {
			try {
				const item = await publishedItem.save();
				resolve(item);
			} catch (error) {
				reject("Failed writing to database");
			}
		});
	},

	deleteItem : function () {

	},

	getItems : function(ownerID){
		return new Promise( async (resolve, reject) => {
			try {
				const items = await Item.find({ownerID});
				resolve(items);
			} catch (error) {
				reject(error);
			}
		});
	},

	updateItem : () => {
		
	}
}


// methods in itemController:
// -createItem
// -deleteItem
// -getItem
// -updateItem