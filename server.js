// Method Name	Operation	Description
// POST	Create	Used for creating a new record of information
// GET	Read	Used for retrieving information
// PUT	Update	Used for updating existing information
// DELETE	Delete	Used for deleting information

const express = require('express');
const path = require('path');
let note = require('./db/db.json');
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes/', (req, res) => {
    note = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(note);
})

app.post('/api/notes/', (req, res) => {
    console.info(`${req.method} request received to add a review `)

    const { title, task } = req.body;

        const newNote = {
            title, 
            task,
        };
        newNote.id = Math.floor(Math.random()*100);
        note.push(newNote);
    
    fs.writeFileSync("./db/db.json", JSON.stringify(note));
    console.log(note);

    res.status(201).json(note);
})


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})