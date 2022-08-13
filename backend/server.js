const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path: './.env'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongo db atals connect
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection succesfully!');
}) 

// API Routes
const contactsRouter = require('./api_routes/api_contacts');

// ->
app.use('/contacts', contactsRouter);

// start server
app.listen(port, () => {    
    console.log(`Server running on port: ${port}`);
});

module.exports = app;
