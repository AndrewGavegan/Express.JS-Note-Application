// requiring the helper functions that the fs package provides us with, in this route so we can set up the functionality //
const { readFromFile, readAndAppend } = require('../heplers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// passed in an app function requirement in the server.js file so now we pass that arguement into this router function //

module.exports = function (app) {
    app.get('/', (req, res) => {
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    });

    app.post('/', (req, res) => {
        console.log(req.body);

        const {Note} = req.body;

            // using unique id package to give each note its own identifier //
        Note.id = uuid.v4();
            // getting the data that got put in database before //
        let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        // pushed data from json file database into the req.body //
        data.push(Note) // stringifying new note //
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data);

    })
}