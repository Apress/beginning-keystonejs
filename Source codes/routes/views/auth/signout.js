var keystone = require('keystone');

exports = module.exports = function(req, res) {
		
	keystone.session.signout(req, res, function() {
		res.redirect('/');
	});
	
};