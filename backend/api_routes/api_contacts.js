const router = require('express').Router();
const { response } = require('express');
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

// API EP - for deleting contact by id 
router.route('/:id').delete((request, response) => {
    Contact.findByIdAndDelete(request.params.id)
        .then(() => response.json('Contact was deleted successfuly! '))
        .catch(error => response.status(400).json('DeletedContact-Error: ' + error));
})

// API EP - for get contact by id
router.route('/:id').get((request, response) => {
    Contact.findById(request.params.id)
        .then(contact => response.json(contact))
        .catch(error => response.status(400).json('FindContactById-Error' + error));
});

module.exports = router;