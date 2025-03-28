const axios = require("axios")

const getMovies = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies")
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = { getMovies }
