var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    message: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Post', PostSchema);