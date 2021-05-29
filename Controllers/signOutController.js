

module.exports.signOut = (request, response) => {
   
    request.session.destroy( ()=>{
        response.redirect('/signin')
    } )

}