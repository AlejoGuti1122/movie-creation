const validateMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body

  // Validación de campos obligatorios
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios",
    })
  }

  // Validaciones específicas
  if (typeof year !== "number" || year.toString().length !== 4) {
    return res.status(400).json({
      error: "El año debe ser un número de 4 dígitos",
    })
  }

  if (typeof rate !== "number" || rate < 0 || rate > 10) {
    return res.status(400).json({
      error: "El rating debe ser un número entre 0 y 10",
    })
  }

  if (!Array.isArray(genre) || genre.length === 0) {
    return res.status(400).json({
      error: "El género debe ser un array con al menos un elemento",
    })
  }

  // Si pasa todas las validaciones
  next()
}

module.exports = validateMovie
