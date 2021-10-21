const mongoose = require('mongoose');

//describes how the data looks
const PostSchema = mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    city: {type: String, enum: ['Manchester', 'London', 'Birmingham', 'Leeds', 'Liverpool'], required: true},
})

module.exports = mongoose.model('userPost', PostSchema);