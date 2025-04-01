const { getMovies, createMovie } = require("../services/moviesService")

const getMoviesController = async (req, res) => {
  try {
    const movies = await getMovies()
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Nuevo controlador para crear película
const createMovieController = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body
    
    const newMovie = await createMovie({
      title, 
      year, 
      director, 
      duration, 
      genre, 
      rate, 
      poster
    })
    
    res.status(201).json({ 
      message: "Película creada exitosamente", 
      movie: newMovie 
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getMoviesController, createMovieController }