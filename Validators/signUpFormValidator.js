const { check } = require('express-validator')


module.exports = [
    
    check('userName').isLength({ min: 3 }).withMessage("Name can't be less than 3 letters!!"),
    check('userEmail').isEmail().withMessage("Please enter a valid Email!!"),
    check('userPassword').isLength({ min: 3 }).withMessage("Password can't be less than 8 charchters!!"),
    check('confirmPassword').custom((confirmPassword, { req }) => {
        if (confirmPassword != req.body.userPassword) { 
            return false }
        else { return true }
    }),
]
