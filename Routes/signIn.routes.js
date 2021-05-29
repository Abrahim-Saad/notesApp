const app = require('express').Router();
const signinFormInputValidator = require('../Validators/signinFormValidator')
// const signinAuthenticator = require('../Middleware/signinAuthenticator')

const signInController = require('../Controllers/signInController')


app.get('/signin', signInController.signIn)


app.post('/login', signinFormInputValidator, signInController.logIn)



module.exports = app