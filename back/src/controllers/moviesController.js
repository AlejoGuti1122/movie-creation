const { getMovies } = require("../services/moviesService");

const getMoviesController = (req, res) => {
    try {
        const movies = getMovies();  // Ejecutamos la función del servicio
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getMoviesController
};