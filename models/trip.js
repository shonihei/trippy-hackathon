var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var TripSchema = mongoose.Schema({
    _creatorID: {
        type: Schema.ObjectId,
        ref: 'User'
    },
	days : [{ type: Schema.ObjectId, ref: 'Day' }],
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
});

module.exports.createTrip = function(newTrip, callback){
    newTrip.save(callback);
}

module.exports.getTripByCreatorID = function(creatorID, callback){
	var query = {_creatorID: creatorID};
	User.find(query, callback);
}

var Trip = module.exports = mongoose.model('Trip', TripSchema);
