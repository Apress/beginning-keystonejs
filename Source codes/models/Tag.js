var keystone = require('keystone');
var Types = keystone.Field.Types;


var Tag = new keystone.List('Tag', {
	autokey: { from: 'name', path: 'slug', unique: true }
});

Tag.add({
	name: { type: String, required: true }
});

 
Tag.relationship({ ref: 'Ticket', refPath: 'tickettags', path: 'tags' });
 
Tag.register();