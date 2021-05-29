const app = require('express').Router();

app.get('/signout', (request, response) => {
   
    request.session.destroy( ()=>{
        response.redirect('/signin')
    } )

})


module.exports = app