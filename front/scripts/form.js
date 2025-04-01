const { createMovie } = require("./services")

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-pelicula")

  if (!form) {
    console.error("Formulario no encontrado")
    return
  }

  function showError(input, message) {
    clearError(input)
    const errorSpan = document.createElement("span")
    errorSpan.classList.add("error-msg")

    errorSpan.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`

    input.insertAdjacentElement("afterend", errorSpan)
    input.classList.add("error")
  }

  function clearError(input) {
    input.classList.remove("error")
    const nextElem = input.nextElementSibling
    if (nextElem && nextElem.classList.contains("error-msg")) {
      nextElem.remove()
    }
  }

  const inputs = form.querySelectorAll("input")
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      clearError(input)
    })
  })

  form.addEventListener("submit", async function (event) {
    // Cambiado a async
    event.preventDefault()

    inputs.forEach((input) => clearError(input))

    let valid = true

    const title = document.getElementById("title").value.trim()
    const year = document.getElementById("year").value.trim()
    const director = document.getElementById("director").value.trim()
    const hoursStr = document.getElementById("hours").value
    const minutesStr = document.getElementById("minutes").value
    const hours = parseInt(hoursStr)
    const minutes = parseInt(minutesStr)
    const rateStr = document.getElementById("rate").value
    const rate = parseFloat(rateStr)
    const poster = document.getElementById("poster").value.trim()
    const genre = Array.from(
      // Cambiado de genres a genre para coincidir con el modelo
      document.querySelectorAll('input[name="genre"]:checked')
    ).map((el) => el.value)

    if (!title) {
      showError(document.getElementById("title"), "completa este campo")
      valid = false
    }
    if (!year) {
      showError(document.getElementById("year"), "completa este campo")
      valid = false
    }
    if (!director) {
      showError(document.getElementById("director"), "completa este campo")
      valid = false
    }
    if (hoursStr.trim() === "" || isNaN(hours)) {
      showError(document.getElementById("hours"), "completa este campo")
      valid = false
    }
    if (
      minutesStr.trim() === "" ||
      isNaN(minutes) ||
      minutes < 0 ||
      minutes >= 60
    ) {
      showError(document.getElementById("minutes"), "completa este campo")
      valid = false
    }
    if (rateStr.trim() === "" || isNaN(rate)) {
      showError(document.getElementById("rate"), "completa este campo")
      valid = false
    } else if (rate < 0 || rate > 10) {
      showError(
        document.getElementById("rate"),
        "La calificación debe estar entre 0 y 10."
      )
      valid = false
    }
    if (!poster) {
      showError(document.getElementById("poster"), "completa este campo")
      valid = false
    }

    if (genre.length === 0) {
      // Cambiado de genres a genre
      alert("Seleccione al menos un género.")
      valid = false
    }

    if (!valid) {
      return
    }

    const duration = `${hours}h ${minutes}m`
    const movieData = {
      title,
      year: parseInt(year),
      director,
      duration,
      genre,
      rate,
      poster,
    }

    try {
      const response = await createMovie(movieData)
      console.log("Película guardada en la base de datos:", response)
      alert("Película guardada en la base de datos exitosamente.")

      window.location.href = "index.html"
    } catch (error) {
      console.error("Error al guardar la película:", error)
      alert(`Error al guardar la película: ${error.message}`)
    }
  })
})
