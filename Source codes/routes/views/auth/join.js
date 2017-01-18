var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	if (req.user) {
		return res.redirect('/tickets');
	}
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'createaccount';
	locals.form = req.body;
     
	view.on('post', function(next) {
		
		async.series([
			
			function(cb) {
				
				if (!req.body.username || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
					req.flash('error', 'Please enter a username, your name, email and password.');
					return cb(true);
				}
				
				return cb();
				
			},
            
            function(cb) {
				
				keystone.list('User').model.findOne({ username: req.body.username }, function(err, user) {
					
					if (err || user) {
						req.flash('error', 'User already exists with that Username.');
						return cb(true);
					}
					
					return cb();
					
				});
				
			},
			
			function(cb) {
				
				keystone.list('User').model.findOne({ email: req.body.email }, function(err, user) {
					
					if (err || user) {
						req.flash('error', 'User already exists with that email address.');
						return cb(true);
					}
					
					return cb();
					
				});
				
			},
			
			function(cb) {
			
				var userData = {
                    username: req.body.username,
					name: {
						first: req.body.firstname,
						last: req.body.lastname,
					},
					email: req.body.email,
					password: req.body.password
				};
				
				var User = keystone.list('User').model,
					newUser = new User(userData);
				
				newUser.save(function(err) {
					return cb(err);
				});
			
			}
			
		], function(err){
			
			if (err) return next();
			
			var onSuccess = function() {
 					res.redirect('/tickets');
			}
			
			var onFail = function(e) {
				req.flash('error', 'There was a problem signing you up, please try again.');
				return next();
			}
			
			keystone.session.signin({ email: req.body.email, password: req.body.password }, req, res, onSuccess, onFail);
			
		});
		
	});
	
	view.render('auth/join');
	
}