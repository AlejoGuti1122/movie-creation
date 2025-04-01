const mongoose = require("mongoose")

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

const Movie = mongoose.model("Movie", movieSchema, "movies")

module.exports = Movie
