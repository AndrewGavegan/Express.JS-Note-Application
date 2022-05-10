const express = require('express');
const path = require('path');

// moved page get requests from server.js file to routes folder for neater code //
// passed in an app function requirement in the server.js file so now we pass that arguement into this router function //
module.exports = function (app) {

        // notes page route //
    app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
    );

    // homepage route //
    app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
    );
}