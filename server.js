const express = require('express')


PORT = process.env.PORT || 3456;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// notes and index routes //
require('./routes/notes')(app);
require('./routes/index')(app);


// link port to app //
app.listen(PORT, () =>
    console.log(`Note App listening at http://localhost:${PORT} 🚀`)
    );