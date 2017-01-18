var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	 
      var ticket = keystone.list('Ticket').model.find()
        .where('_id', '56c27c7d00647be83185f932')
        .populate('tags')
        .exec(function(err, ticket) {
            return ticket;
        }); 
    
    
    keystone.list('User').model.findOne().exec(function(err, user) {
    user.populateRelated('tickets', function(err) {
        // tickets are populated
        console.log(user);
    });
    });
    
   // console.log(user.userprofile);
    
 //console.log('User 1234s facebook id is - ' + user.profile().facebook);
 
	/* var q = keystone.list('User').model.findOne({'_id': '5692e414daa25ac42d792aed'});
		 
		q.exec(function(err, result) {
			if(result != null)
			{
				console.log(JSON.stringify(result));
                console.log(JSON.stringify(result.profile().facebook));
			}
			else
			{
				console.log('not found')
			}
           
		});
        */
        res.send('done');
};
