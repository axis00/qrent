const errors = require('restify-errors');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const Item = require('../models/Item');
const itemController = require('../controllers/itemController');

module.exports = (server) => {
	/**
	 * @api {get} /items Get the items posted by the user
	 * @apiName GetItems
	 * @apiGroup Items
	 * 
	 * @apiHeader {String} Authorization The user's authorization token
	 */
	server.get('/items', async (req,res,next) =>{

		try {
			const user = await User.findById(req.user._id);
			if(!user.isOwner) return next(new errors.UnauthorizedError());

			const ownerID = req.user._id;
			const items = await itemController.getItems(ownerID);
			res.send(items);
			next();

		} catch (error) {
			return next(new errors.InternalError(error));
		}

	});

	/**
	 * @api {post} /item Create a new item associated with the current user
	 * @apiName CreateItem
	 * @apiGroup Items
	 * 
	 * @apiParam {String} itemName
	 * @apiParam {String} itemDesc
	 * @apiParam {Array} photos
	 */
	server.post('/item', async(req,res,next) => {

		try {
			const user = await User.findById(req.user._id);
			if (!user.isOwner) return next(new errors.UnauthorizedError());

			const ownerID = req.user._id;

			const{ itemName, itemDesc, photos } = req.body;

			const item = itemController.createItem(itemName, itemDesc, ownerID, photos);
			res.send(201);
			next();
		} catch (error) {
			return next(new errors.InternalError(error));
		}
	})
}