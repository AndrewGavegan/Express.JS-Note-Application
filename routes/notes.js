// requiring the helper functions that the fs package provides us with, in this route so we can set up the functionality //
const { readFromFile, readAndAppend } = require('../heplers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const notes = express.Router();
// passed in an app function requirement in the server.js file so now we pass that arguement into this router function //


    notes.get('/', (req, res) => {
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    });

    notes.post('/', (req, res) => {
        console.log(req.body);

        const {title, text} = req.body;
 // using unique id package to give each note its own identifier //
        const Note = {title, text, id: uuidv4() };

           
       readAndAppend(Note, './db/db.json');
       res.json('Note Added')
    })

    module.exports = notes;