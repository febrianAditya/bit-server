// add process.env
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express")
const app = express()
// add process.env.PORT
const PORT = process.env.PORT || 3000
const UserController = require("./controllers/usercontroller")


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/hello", UserController.helloWorld)

app.get("/data-user", UserController.getAllDataUser)

app.post("/register", UserController.createDataUser)

app.listen(PORT, () => {
    console.log("I LOVE " + PORT);
})