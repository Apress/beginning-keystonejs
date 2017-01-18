var keystone = require('keystone'),
	User = keystone.list('User');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	
	view.on('post', function(next) {
		
		if (!req.body.email) {
			req.flash('error', "Please enter an email address.");
			return next();
		}

		User.model.findOne().where('email', req.body.email).exec(function(err, user) {
			if (err) return next(err);
			if (!user) {
				req.flash('error', "Sorry, That email address is not registered in our application.");
				return next();
			}
            
            user.resetPasswordKey = keystone.utils.randomString([16,24]);
            user.save(function(err) {
                if (err) return next(err);
                new keystone.Email({'templateName': 'forgotpassword', 'templateExt': 'swig'}).send({
                    user: user,
                    link: '/resetpassword/' + user.resetPasswordKey,
                    subject: 'Reset your Password',
                    to: user.email,
                    from: {
                        name: 'IncTicket',
                        email: 'info@incticket.com'
                    }
                }, function(err) {
                    if (err) {
                        console.error(err);
                        req.flash('error', 'Error sending reset password email!');
                        next();
                    } else {
                        req.flash('success', 'We have emailed you a link to reset your password');
                        res.redirect('/signin');
                    }
                });
            }); 
		});
		
	});
	
	view.render('auth/forgotpassword');
	
}