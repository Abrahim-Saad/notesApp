const app = require('express').Router();
const signinAuthenticator = require('../Middleware/projectModules/signinAuthenticator')
const homePageController = require('../Controllers/homePageController')

app.get('/home', signinAuthenticator, homePageController.homePage)


module.exports = app