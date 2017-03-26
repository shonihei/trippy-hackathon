var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./trip');

var DaySchema = mongoose.Schema({
    _trip: {
        type: Schema.ObjectId,
        ref: 'Trip'
    },
	days : [{ type: Schema.ObjectId, ref: 'Day' }]
});

var Day = module.exports = mongoose.model('Day', DaySchema);
