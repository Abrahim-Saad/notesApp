const app = require('express').Router();
const signinFormInputValidator = require('../validators/signinFormValidator')
// const signinAuthenticator = require('../Middleware/signinAuthenticator')

const signInController = require('../controllers/signInController')


app.get('/signin', signInController.signIn)


app.post('/login', signinFormInputValidator, signInController.logIn)



module.exports = app
