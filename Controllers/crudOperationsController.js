const noteCollection = require('../models/noteModel')

module.exports.addNote = async (request, response) => {
    const { noteTitle, noteContent } = request.body
    await noteCollection.insertMany(
        {
            noteTitle: noteTitle,
            noteContent: noteContent,
            userID: request.session.userID,
        });
    response.redirect('/home')
}


module.exports.deleteNote = async (request, response) => {
    // const { noteTitle, noteContent } = request.body
    console.log(request.body);
    await noteCollection.findByIdAndDelete({ _id: request.body.noteIDtoDelete });
    response.redirect('/home')
}



module.exports.editNote = async (request, response) => {
    const { noteIDtoEdit, noteTitleToEdit, noteContentToEdit } = request.body
    console.log(request.body);
    await noteCollection.findByIdAndUpdate({ _id: noteIDtoEdit }, { noteTitle: noteTitleToEdit, noteContent: noteContentToEdit });
    response.redirect('/home')
}