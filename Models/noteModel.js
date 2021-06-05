const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

noteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
        unique: true,
    },
    
    noteContent: {
        type: String,
        required: true,
    },

    userID: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
})

const noteModel = mongoose.model('note', noteSchema)

module.exports = noteModel