const app = require('express').Router();
const signinAuthenticator = require('../middleware/projectModules/signinAuthenticator')
const homePageController = require('../controllers/homePageController')

app.get('/home', signinAuthenticator, homePageController.homePage)


module.exports = app