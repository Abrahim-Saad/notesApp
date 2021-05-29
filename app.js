const express = require('express');
const app = express();
// const port = 3000;
const mongoose = require('mongoose')
const appModules = require('./Middleware/appModules')

app.set("view engine", "ejs")

app.use(appModules)

mongoose.connect('mongodb+srv://admin:admin@cluster0.y700p.mongodb.net/notesAppDB', { useNewUrlParser: true, useUnifiedTopology: true })


app.listen(process.env.app.PORT, () => console.log("The Server is Up and Running!!"))

