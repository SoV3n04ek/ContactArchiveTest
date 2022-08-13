const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2, maxlength: 26},
    number: {type: Number, required: true, minlength: 11, maxlength: 13},
    note: {type: String}
}, {
    timestamps: true
});

const Contact = mongoose.model('Contact', contactsSchema);
module.exports = Contact;