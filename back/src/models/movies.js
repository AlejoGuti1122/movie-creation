const mongoose = require("mongoose")

// Definir el esquema con los tipos adecuados
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  genre: {
    type: [String],
  },
  rate: {
    type: Number,
  },
  poster: {
    type: String,
    required: true,
  },
})

// Crear y exportar el modelo - especificamos la colección "movies"
const Movie = mongoose.model("Movie", movieSchema, "movies")

module.exports = Movie
