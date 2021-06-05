const app = require('express').Router();
const signOutController = require('../controllers/signOutController')

app.get('/signout', signOutController.signOut)


module.exports = app