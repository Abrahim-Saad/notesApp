const app = require('express').Router();

const signupFormInputValidator = require('../validators/signUpFormValidator')
const signupAuthenticator = require('../middleware/projectModules/signupAuthenticator')
const signUpController = require('../controllers/signUpController')

app.get('/', signupAuthenticator, signUpController.signUp)

app.get('/signup', signupAuthenticator, signUpController.signUp)


app.post('/addNewAccount', signupFormInputValidator, signUpController.addNewAccount)


module.exports = app