const axios = require("axios")

const getMovies = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies")
    return response.data
  } catch (error) {
    throw error
  }
}

// Agregar esta nueva función para crear películas
const createMovie = async (movieData) => {
  try {
    const response = await axios.post("http://localhost:3000/movies", movieData)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = { getMovies, createMovie }
