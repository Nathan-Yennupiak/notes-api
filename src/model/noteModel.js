const monngoose = require('mongoose')

const noteSchema = new monngoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    }
}, {
    timestamps: true
})   

let NoteModel = monngoose.model('Note', noteSchema)

module.exports = NoteModel