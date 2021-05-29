const app = require('express').Router();
const signOutController = require('../Controllers/signOutController')

app.get('/signout', signOutController.signOut)


module.exports = app