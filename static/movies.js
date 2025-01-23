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
                <div class="star-rating">
                    ${[...Array(5)].map((_, i) => `<span class="star" data-value="${i + 1}">⭐</span>`).join('')}
                </div>
                <p class="user-rating">Your Rating: Not Rated</p>
            `;

            // Add event listener for star rating
            const stars = movieCard.querySelectorAll('.star');
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const rating = star.dataset.value;
                    movieCard.querySelector('.user-rating').textContent = `Your Rating: ${rating}/5`;
                    stars.forEach(s => s.style.color = 'black'); // Reset all stars
                    stars.forEach((s, idx) => {
                        if (idx < rating) {
                            s.style.color = 'gold'; // Highlight selected stars
                        }
                    });
                });
            });

            movieGrid.appendChild(movieCard);
        });
    })
    .catch(error => console.error('Error fetching movies:', error));
