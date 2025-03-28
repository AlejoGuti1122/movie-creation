const { Router } = require("express");
const { getMoviesController } = require("../controllers/moviesController");

const indexRouter = Router();

indexRouter.get("/", getMoviesController);

module.exports = indexRouter;