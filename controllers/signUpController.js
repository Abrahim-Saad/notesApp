const userCollection = require('../models/userModel')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')


module.exports.signUp = (request, response) => {

    response.render('signupPage',
        {
            oldInputs: { userName: "", userEmail: "", userPassword: "" },
            emailExists: false, invalidEmail: false, isLoggedIn: false, profileName: ''
        })


}


module.exports.addNewAccount = async (request, response) => {
    const { userName, userEmail, userPassword } = request.body;
    const userInputErrors = validationResult(request)
    let usedEmail = await userCollection.findOne({ userEmail: userEmail })
    // console.log(usedEmail);
    if (usedEmail == null) {
        if (userInputErrors.isEmpty()) {
            bcrypt.hash(userPassword, 5, async function (err, hashedPassword) {
                // Store hash in your password DB.
                await userCollection.insertMany(
                    {
                        userName: userName,
                        userEmail: userEmail,
                        userPassword: hashedPassword
                    });
                response.redirect('/signin')

            });

        }
        else {
            console.log(userInputErrors.array());
            response.render('signupPage', {
                oldInputs: { userName: userName, userEmail: userEmail, userPassword: userPassword },
                emailExists: false, isLoggedIn: false, profileName: ''
            })
        }
        

    }
    else {
        console.log("Email already Exists!!");
        response.render('signupPage', {
            oldInputs: { userName: userName, userEmail: userEmail, userPassword: userPassword },
            emailExists: true, isLoggedIn: false, profileName: ''
        })
    }

}
