const errors = require('restify-errors');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const Items = require('../models/Items');

module.exports = (server) => {
	// get the items posted by the owner
	server.get('/items',(req,res,next) =>{

	});
	//post a new item
	server.post('/item', async(req,res,next) => {

	})
}