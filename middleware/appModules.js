const express = require('express');
const app = require('express').Router();
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: 'mongodb+srv://admin:admin@cluster0.y700p.mongodb.net/notesAppDB',
    collection: 'mySessions'
  });


app.use(flash())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, './Public')))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(require('../routes/signUp.routes'))
app.use(require('../routes/signIn.routes'))
app.use(require('../routes/signOut.routes'))
app.use(require('../routes/homePage.routes'))
app.use(require('../routes/crudOperations.routes'))

app.get('*', (request, response) => {
  response.send("404 Page Not Found!!")
})

module.exports = app
