const mongoose = require('mongoose');

var favouriteSchema = new mongoose.schema({
	todoItem: {
		type: 'String',
		required: 'This field is required'
	}
	
});