const restify = require('restify');
const mongose = require('mongoose');
const config = require('./config');
const rjwt = require('restify-jwt-community');

const server = restify.createServer();

//middleware
server.use(restify.plugins.bodyParser());

//authentication
server.use(rjwt({ secret : config.JWT_SECRET }).unless({path : ['/authenticate','/register']}));

server.listen(config.PORT, () => {

    mongose.connect(config.MONGODB_URI, 
            {useNewUrlParser  : true}
        );
    

});

const db = mongose.connection;
db.on('error', err => console.log(err));
db.once('open', () => {
    require('./routes/users')(server);
    require('./routes/item')(server);
    require('./routes/request')(server);
    require('./routes/search')(server);
    console.log(`server started on port ${config.PORT}`);
});