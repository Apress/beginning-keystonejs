var keystone = require('keystone');
var Types = keystone.Field.Types;

var Ticket = new keystone.List('Ticket',{
	autokey: { from: 'title', path: 'slug', unique: true },
    searchFields: 'description',
});

Ticket.add({
        title: { type: String, initial: true, default: '', required: true },  
        description: { type: Types.Textarea },   
        priority: { type: Types.Select, options: 'Low, Medium, High', default: 'Low' },
        category: { type: Types.Select, options: 'Bug, Feature, Enhancement', default: 'Bug' },
        status: { type: Types.Select, options: 'New, In Progress, Open, On Hold, Declined, Closed', default: 'New' },
        createdBy: { type: Types.Relationship, ref: 'User', index: true },
        assignedTo: { type: Types.Relationship, ref: 'User', index: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        tags: { type: Types.Relationship, ref: 'Tag', many: true },
    });
    
Ticket.schema.virtual('url').get(function() {
		return '/tickets/'+this.slug;
	 
});


Ticket.defaultSort = '-createdAt';
Ticket.defaultColumns = 'title, status|20%, createdBy, assignedTo, createdAt|15%'; 
Ticket.register();