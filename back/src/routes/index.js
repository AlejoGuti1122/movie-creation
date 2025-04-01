const { Router } = require("express")
const {
  getMoviesController,
  createMovieController,
} = require("../controllers/moviesController")
const validateMovie = require("../middlewares/validateMovie")

const indexRouter = Router()

indexRouter.get("/", getMoviesController)

indexRouter.post("/", validateMovie, createMovieController)

module.exports = indexRouter
