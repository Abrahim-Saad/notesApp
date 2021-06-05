const app = require('express').Router();
const crudOperationsController = require('../controllers/crudOperationsController')

app.post('/addNote', crudOperationsController.addNote)

app.post('/deleteNote', crudOperationsController.deleteNote)

app.post('/editNote', crudOperationsController.editNote)


module.exports = app