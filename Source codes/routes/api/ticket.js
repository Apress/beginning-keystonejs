var keystone = require('keystone'),
    Ticket = keystone.list('Ticket');

/**
 * List Tickets
 */
exports.getTickets = function(req, res) {
	Ticket.model.find(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			tickets: items
		});
		
	});
}

/**
 * Get Ticket by ID
 */
exports.getTicketById = function(req, res) {
	Ticket.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			ticket: item
		});
		
	});
}


/**
 * Create a Ticket
 */
exports.createTicket = function(req, res) {
	
	var item = new Ticket.model(),
		data = req.body;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			ticket: item
		});
		
	});
}

/**
 * Update Ticket by ID
 */
exports.updateTicketById = function(req, res) {
	Ticket.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		var data = req.body;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.apiError('create error', err);
			
			res.apiResponse({
				ticket: item
			});
			
		});
		
	});
}

/**
 * Delete Ticket by ID
 */
exports.deleteTicketById = function(req, res) {
	Ticket.model.findById(req.params.id).exec(function (err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		item.remove(function (err) {
			if (err) return res.apiError('database error', err);
			
			return res.apiResponse({
				success: true
			});
		});
		
	});
}