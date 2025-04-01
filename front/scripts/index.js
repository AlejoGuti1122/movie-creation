const renderCards = require("./renderCards")
const { getMovies } = require("./services")
const cardsContainer = document.querySelector(".cards-container")


const loadMovies = async () => {
  try {
    const movies = await getMovies()
    const cardsHTML = renderCards(movies)
    cardsContainer.innerHTML = cardsHTML
  } catch (error) {
    console.error("Error al obtener películas:", error)
    cardsContainer.innerHTML =
      '<p class="error">Error al cargar las películas</p>'
  }
}

loadMovies()

// const renderCards = require("./renderCards")
// const cardsContainer = document.querySelector(".cards-container")

// $.get("https://students-api.up.railway.app/movies")
//   .done((movies) => {
//     const cardsHTML = renderCards(movies)
//     cardsContainer.innerHTML = cardsHTML
//   })
//   .fail((error) => console.error("Error:", error))

/*
tempData
const createCards = () => {
    const cardsHTML = tempData.map(movie => `
        <div class="card">
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Director: ${movie.director}</p>
            <p>Duración: ${movie.duration}</p>
            <p>Género: ${movie.genre.join(', ')}</p>
            <p>Año: ${movie.year}</p>
            <p>Calificación: ${movie.rate}</p>
        </div>
    `).join('');

    cardsContainer.innerHTML = cardsHTML;
}

createCards();
*/
