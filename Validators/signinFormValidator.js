const { check } = require('express-validator')


module.exports = [
    check('userEmail').isEmail().withMessage("Please enter a valid Email!!"),
    
]
