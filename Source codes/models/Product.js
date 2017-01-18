var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product');
Product.add({
    name: { type: String, required: true },
    team: { type: String },
    publishedStatus: { type: Types.Select, options: 'draft, published', default: 'draft' },
    createdAt: { type: Date, default: Date.now }

});

//our virtual property to display full title
Product.schema.virtual('fulltitle').get(function() {
    return this.title + ' ' + this.team;
});

Product.register();