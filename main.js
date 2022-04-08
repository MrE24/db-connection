
//server setup

const express = require("express");
const app = express()
 //server settings on saving data
app.use(express.json())
app.use(express.urlencoded({extended: false}));


//dotenv
const dotenv = require("dotenv");
dotenv.config({path: "./env./env"})

// server settings on directories
app.use("/resources", express.static("public"))
app.use("/resources", express.static(__dirname + "/public"))

// styles engine
app.set("viewengine", "ejs")

//hash
const bcryptjs = require("bcryptjs")


//Variables
const session = require("express-session")
app.use(session({

    secret: "secret",
    resave: true,
    saveUnitiallized: true 

}));

const connection = require("./database/db")


// server stuff
app.get('/', (req, res) => {

    res.send("SERVER IS UP!")
})
app.listen(3000,(req, res) => {

    console.log("listening on port 3000")
})