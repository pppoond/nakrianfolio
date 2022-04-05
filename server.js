const express = require("express")
const app = express()
var methodOverride = require("method-override")
const path = require("path")

// Using pug template engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// connecting route to database
// app.use(function (req, res, next) {
//     req.con = con
//     next()
// })

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
// const biodataRouter = require("./routes/biodataRouter")

// routing
app.get("/", async function (req, res) {
    res.send('Hello');
})

app.post("/create", async function (req, res) {
    console.log(req.body)
    res.send('Hello');
})

// starting server
app.listen(3000, function () {
    console.log("server listening on port 3000")
})