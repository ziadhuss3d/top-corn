// Fetch movies from the local JSON file
fetch('/static/movies.json')
    .then(response => response.json())
    .then(movies => {
        const movieGrid = document.querySelector('.movie-grid');

        // Generate movie cards dynamically
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="Movie Poster">
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
            `;

            movieGrid.appendChild(movieCard);
        });
    })
    .catch(error => console.error('Error fetching movies:', error));
