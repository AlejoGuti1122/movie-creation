const cardsContainer = document.querySelector('.cards-container');

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