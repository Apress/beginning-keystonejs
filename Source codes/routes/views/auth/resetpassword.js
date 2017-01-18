var keystone = require('keystone'),
	User = keystone.list('User');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	view.on('init', function(next) {
		
		User.model.findOne().where('resetPasswordKey', req.params.key).exec(function(err, userFound) {
			if (err) return next(err);
			if (!userFound) {
				req.flash('error', "Sorry, that reset password key isn't valid.");
				return res.redirect('/forgotpassword');
			}
			locals.key =  req.params.key;
			next();
		});
		
	});
	
	view.on('post', function(next) {
		
		if (!req.body.password || !req.body.password_confirm) {
			req.flash('error', "Please enter, and confirm your new password.");
			return res.redirect('/resetpassword/'+req.params.key);
		}
		
		if (req.body.password != req.body.password_confirm) {
			req.flash('error', 'Please make sure both passwords match.');
			return res.redirect('/resetpassword/'+req.params.key);
		}
		
        User.model.findOne().where('resetPasswordKey', req.body.resetkey).exec(function(err, userFound) {
			if (err) return next(err);
			userFound.password = req.body.password;
           userFound.resetPasswordKey = '';
            userFound.save(function(err) {
                if (err) return next(err);
                req.flash('success', 'Your password has been reset, please sign in.');
                res.redirect('/signin');
            });
		});
         
	});
	
	view.render('auth/resetpassword');
};