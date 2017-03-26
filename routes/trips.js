var express = require('express');
var router = express.Router();

var Trip = require('../models/trip');

router.get('/', ensureAuthenticated, function(req, res){
	Trip.getTripByCreatorID(req.user.id, function(err, trips) {
		if(err) throw err;
		res.render('trips', {
			trips: trips
		});
	});

});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/');
	}
}

router.post('/addtrip', ensureAuthenticated, function(req, res) {
	console.log(req.user);
});

module.exports = router;
