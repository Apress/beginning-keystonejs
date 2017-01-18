var keystone = require('keystone');
var Types = keystone.Field.Types;

var UserProfile = new keystone.List('UserProfile');

UserProfile.add({
	facebook: { type: String},
	twitter: { type: String},
	pinterest: { type: String },
	bio: { type: Types.Textarea },
	user: { type: Types.Relationship, ref: 'User', many: false }
});

UserProfile.defaultColumns = 'user';
UserProfile.register();