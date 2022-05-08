const express = require('express')
const fs = require('fs')
const api = require('./routes/index.js');

PORT = process.env.PORT || 3456;

const app = express();

app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

// homepage route //
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// notes page route //
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );

app.listen(PORT, () =>
    console.log(`Note App listening at http://localhost:${PORT} 🚀`)
    );