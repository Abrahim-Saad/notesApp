const express = require('express');
const app = express();
// const port = 3000;
const mongoose = require('mongoose')
const appModules = require('./Middleware/appModules')

app.set("view engine", "ejs")

app.use(appModules)

mongoose.connect('mongodb+srv://admin:admin@cluster0.y700p.mongodb.net/notesAppDB', { useNewUrlParser: true, useUnifiedTopology: true })

<<<<<<< HEAD
// app.listen(port, () => console.log("The Server is Up and Running!!"))
=======
app.listen(process.env.app.PORT, () => console.log("The Server is Up and Running!!"))
>>>>>>> 0ebac6c1682eca21fbc4de85d56c20ea4c544245
