const app = require('express').Router();
const userCollection = require('../Models/userModel')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const signinFormInputValidator = require('../Validators/signinFormValidator')
// const signinAuthenticator = require('../Middleware/signinAuthenticator')


app.get('/signin', (request, response) => {
    if (request.session.userID) {
        response.redirect('/home')
    }else{
        response.render('signinPage.ejs', {
            oldInputs: { userEmail: "", userPassword: "" },
            emailExists: true, passwordCorrect: true, invalidEmail: false, 
            isLoggedIn: false, profileName: '',
        })
    }
    

})

app.post('/login', signinFormInputValidator, async (request, response) => {
    const { userEmail, userPassword } = request.body
    // console.log(emailForm);
    const userInputErrors = validationResult(request)
    if (userInputErrors.isEmpty()) {
        let userFound = await userCollection.findOne({ userEmail: userEmail })
        // console.log(userFound);
        if (userFound != null) {
            bcrypt.compare(userPassword, userFound.userPassword, function (error, passwordMatches) {
                if (error) {
                    console.log(error);
                }
                else if (passwordMatches) {
                    let hour = 3600000
                    request.session.cookie.expires = new Date(Date.now() + hour)
                    request.session.cookie.maxAge = hour
                    request.session.userID = userFound._id
                    request.session.userName = userFound.userName
                    // response.render('homePage', { name: request.session.userName })
                    response.redirect('/home')
                } else {
                    console.log('Wrong Password');
                    response.render('signinPage.ejs', {
                        oldInputs: { userEmail: userEmail,},
                        emailExists: true, passwordCorrect: false, invalidEmail: false,
                         isLoggedIn: false, profileName :''
                    })

                }
            })

        } else {
            console.log("Email doesn't exist");
            response.render('signinPage.ejs', {
                oldInputs: { userEmail: userEmail, userPassword: userPassword },
                emailExists: false, passwordCorrect: true, invalidEmail: false,
                isLoggedIn: false, profileName : ''
            })
        }
    } else {
        console.log(userInputErrors.array());
        response.render('signinPage.ejs', {
            oldInputs: { userEmail: userEmail, userPassword: userPassword },
            emailExists: true, passwordCorrect: true, invalidEmail: true,
            isLoggedIn: false, profileName : ''
        })
    }
    // console.log(userFound);

})



module.exports = app