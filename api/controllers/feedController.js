const Item = require('..models/Meal');

module.exports = {

    getFeed : function(username){
        return new Promise( async (resolve, reject) => {
            try {
                const items = await Item.find({ownerID});
                resolve(items);
            } catch(err){
                reject(err);
            }
        })
    }
}