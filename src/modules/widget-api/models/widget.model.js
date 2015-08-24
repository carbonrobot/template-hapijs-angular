var mongoose = require('mongoose');

var widgetSchema = mongoose.Schema({
	name: {
		type: String,
		required: 'Widget name is required'
	},
	content: {
		type: String,
		required: 'Content is required'
	}
});
mongoose.model('Widget', widgetSchema);