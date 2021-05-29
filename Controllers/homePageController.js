const noteCollection = require('../Models/noteModel')


module.exports.homePage = async (request, response) => {

        // let userNotes = await noteCollection.find({}).populate('userId', 'userName')
        let userNotes = await noteCollection.find({ userID: request.session.userID });
        // console.log(userNotes);
        response.render('homePage', {
            isLoggedIn: request.session.isLoggedIn,
            profileName: request.session.userName,
            userNotesArray: userNotes
        })
    }
