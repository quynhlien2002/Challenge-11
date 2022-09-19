// Method Name	Operation	Description
// POST	Create	Used for creating a new record of information
// GET	Read	Used for retrieving information
// PUT	Update	Used for updating existing information
// DELETE	Delete	Used for deleting information

const express = require('express');
const path = require('path');
const fs = require('fs');
// const req = require('express/lib/request');
const note = require('./db.json');

const PORT = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/note', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

app.get('/api/notes/', (req, res) => {
    res.json(note);
})

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a review `)

    const { title, task } = req.body;

    if (title && task) {
        const newNote = {
            title, 
            task,
        };

        const response = {
            status: 'sucess', 
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error posting note');
    }
    
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});




app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})