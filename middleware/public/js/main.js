function getIDtoDelete(noteID) {
    console.log(noteID);
    console.log("Get ID");
    document.getElementById('confirmDelete').value = noteID
}

function getIDtoEdit(noteID) {
    let noteTitle = document.getElementById('noteName' + noteID).innerText
    let noteContent = document.getElementById('noteDesc' + noteID).innerText

    document.getElementById('confirmEdit').value = noteID
    document.getElementById('noteTitleToEdit').value = noteTitle
    document.getElementById('noteContentToEdit').value = noteContent

}
