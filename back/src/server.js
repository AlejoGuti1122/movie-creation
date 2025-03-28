const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const indexRouter = require("./routes")

const app = express()

// Middlewares - El orden es importante
app.use(morgan("dev"))  // Logger de peticiones HTTP
app.use(cors())        // Habilita CORS
app.use(express.json()) // Parser para JSON

// Rutas
app.use("/movies", indexRouter)

module.exports = app