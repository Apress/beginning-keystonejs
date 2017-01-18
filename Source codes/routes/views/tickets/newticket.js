var keystone = require('keystone'),
    Ticket = keystone.list('Ticket');
 
exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;
 
    locals.form = req.body;
	locals.data = {
		users: []
	};

	view.on('init', function(next) {
		 
		 var q = keystone.list('User').model.find().select('_id username')
		 
		q.exec(function(err, results) {
			locals.data.users = results;
			next(err);
		});
        
        
 	});
 
    view.on('post', function(next) {

        var newTicket = new Ticket.model(),
		data = req.body;
	
        data.createdBy = res.locals.user.id;
        
        newTicket.getUpdateHandler(req).process(data, {
			flashErrors: true,
		}, function(err) {
            if (err) {
                    locals.validationErrors = err.errors;
                } else {
                    req.flash('success', 'Your ticket has been created!');
                    return res.redirect('/tickets/' + newTicket.slug);
                }
                next();
            
            });
              
        });
        
	// Render the view
	view.render('tickets/newticket');

};