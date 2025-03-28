class Movie {
  constructor(data) {
    // Validaciones requeridas
    if (!data.title) throw new Error("El título es requerido")
    if (!data.poster) throw new Error("El poster es requerido")
    if (!data.director) throw new Error("El director es requerido")

    // Asignación de propiedades
    this.title = data.title
    this.year = data.year
    this.director = data.director
    this.duration = data.duration
    this.genre = data.genre || []
    this.rate = data.rate
    this.poster = data.poster
  }
}

module.exports = Movie
