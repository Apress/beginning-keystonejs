var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'tickets';
	
    locals.data = { 
		tickets: [],
	};
    
    // Load all tickets
	view.on('init', function(next) {

		var q = keystone.list('Ticket').paginate({
                    page: req.query.page || 1,
                    perPage: 5,
                    maxPages: 5
                });
		 
		q.exec(function(err, results) {
			locals.data.tickets = results;
			next(err);
		});

	}); 
	
    
	// Render the view
	view.render('tickets/ticketlist');
	
};
