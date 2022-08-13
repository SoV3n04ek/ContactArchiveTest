const router = require('express').Router();
let Contact = require('../models/contacts.model');

// API EP - for get list contacts
router.route('/').get((request, response) => {
    Contact.find()
        .then(contacts => response.json(contacts))
        .catch(error => response.status(400).json(`Server get_contacts error: ${error}`));
});

// API EP - for creating contact 
router.route('/add').post((request, response) => {
    const name = request.body.name;
    const number = request.body.number;
    const note = request.body.note;

    const newContact = new Contact({name: name, number: number, note: note});
    newContact.save()
        .then(() => response.json("User added succesfully!"))
        .catch(error => response.status(400).json(`Server add_user-error: ${error}`));
});

module.exports = router;