const router = require('express').Router();
const { validateNote, createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {  
    let deleted = req.params.id; 
    deleteNote(deleted, notes); 
    res.json(notes);
});    

router.post('/notes', (req, res) => {    
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;