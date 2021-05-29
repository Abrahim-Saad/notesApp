const app = require('express').Router();

const signupFormInputValidator = require('../Validators/signUpFormValidator')
const signupAuthenticator = require('../Middleware/projectModules/signupAuthenticator')
const signUpController = require('../Controllers/signUpController')

app.get('/', signupAuthenticator, signUpController.signUp)

app.get('/signup', signupAuthenticator, signUpController.signUp)


app.post('/addNewAccount', signupFormInputValidator, signUpController.addNewAccount)


module.exports = app