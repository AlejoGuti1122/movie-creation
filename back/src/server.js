const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const indexRouter = require("./routes")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/movies", indexRouter)

module.exports = app
