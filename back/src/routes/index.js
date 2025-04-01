const { Router } = require("express")
const {
  getMoviesController,
  createMovieController,
} = require("../controllers/moviesController")
const validateMovie = require("../middlewares/validateMovie")

const indexRouter = Router()

indexRouter.get("/", getMoviesController)
// Aplicamos el middleware de validación
indexRouter.post("/", validateMovie, createMovieController)

module.exports = indexRouter
