const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

noteSchema = mongoose.Schema({
    noteTitle: String,
    noteContent: String,
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
})

const noteModel = mongoose.model('note', noteSchema)

module.exports = noteModel