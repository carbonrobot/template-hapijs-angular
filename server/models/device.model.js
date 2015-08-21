var mongoose = require('mongoose');

var deviceSchema = mongoose.Schema({
	name: {
		type: String,
		required: 'Device name is required'
	},
	content: {
		type: String,
		required: 'Content is required'
	}
});
mongoose.model('Device', deviceSchema);