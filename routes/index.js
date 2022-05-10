const express = require('express');
const app = express();
// getting the route for the notes file //
const router = require('./notes')
app.use('/notes', router);

module.exports = app;