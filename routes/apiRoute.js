const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

//get all notes
router.get('/notes', (req, res) =>{
    console.log('Received a POST request to /api/notes with data:', req.body);
    const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
    const notes = JSON.parse(data);
    res.json(notes);
});

//save note
router.post('/notes', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
    const notes = JSON.parse(data);
    
    const newNote =  {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };

    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));

    res.json(newNote);
});

module.exports = router;
