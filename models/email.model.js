const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmailSchema = new Schema({
    email: {type: String, required: true, max: 100}
});


// Export the model
module.exports = mongoose.model('Email', EmailSchema);