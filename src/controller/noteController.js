const express = require('express')
require('../db/connection')
const router = express.Router()
const NoteModel = require('../model/noteModel')

// Endpoint for creating a new note
router.post('/api/v1/notes', async (req, res) => {
    
    try {
        let note = new NoteModel({
            ...req.body
        })
        await note.save()
        res.status(201).send(note)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Endpoint for getting all notes
router.get('/api/v1/notes', async (req, res) => {
    try {
        let notes = await NoteModel.find({})
        res.send(notes)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Endpoint for getting a single note
router.get('/api/v1/notes/:id', async (req, res) => {
    try {
        let note = await NoteModel.findById(req.params.id)
        if (!note) {
            return res.status(404).send()
        }
        res.send(note)
    } catch (error) {
        res.status(500).send(error)
}
});

//Endpoint for updating a note
router.patch('/api/v1/notes/:id', async (req, res) => {
    try {
        // Find the note by its ID and update it
        let note = await NoteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        // Send the updated note back to the client
        res.send(note);
    } catch (error) {
        // Handle any errors that may occur
        console.error(error)
        res.status(400).send({ error: 'Failed to update the note. | Ensure that you are using an already existing Title' });
    }
});

//Endpoint for deleting a note
router.delete('/api/v1/notes/:id', async (req, res) => {
    
    try { 
        const id = req.params.id // Get the ID from the URL
        // Find the note by its ID and delete it
        let note = await NoteModel.findByIdAndDelete(id)
        if (!note) {
            return res.status(404).send()
        }
        res.send(note)
    } catch (error) {
        res.status(500).send({error : 'Failed to delete the note.'})
    }
})

module.exports = router