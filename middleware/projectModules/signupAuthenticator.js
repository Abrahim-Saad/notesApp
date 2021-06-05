
module.exports = (request, response, next) => {
    if (request.session.userID) {
        request.session.destroy( ()=>{
            response.redirect('/signin')
        } )
    } else {
        next()
    }
}
