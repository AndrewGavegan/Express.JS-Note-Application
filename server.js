const express = require('express')


PORT = process.env.PORT || 3456;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


   // notes page route //
   app.get('/notes', (req, res) =>
   res.sendFile(path.join(__dirname, '../public/notes.html'))
   );

   // homepage route //
   app.get('*', (req, res) => 
   res.sendFile(path.join(__dirname, '../public/index.html'))
   );
   
// link port to app //
app.listen(PORT, () =>
    console.log(`Note App listening at http://localhost:${PORT} 🚀`)
    );