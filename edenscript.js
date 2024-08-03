document.addEventListener('DOMContentLoaded', () => {
    const movies = {
        screen1: [
            { title: 'Movie 1', poster: 'movie1-poster.jpg' },
            { title: 'Movie 2', poster: 'movie2-poster.jpg' }
        ],
        screen2: [
            { title: 'Movie 3', poster: 'movie3-poster.jpg' },
            { title: 'Movie 4', poster: 'movie4-poster.jpg' }
        ]
    };

    function updateScreen(screenId, movieData) {
        const screen = document.getElementById(screenId);
        const postersDiv = screen.querySelector('.movie-posters');
        postersDiv.innerHTML = '';
        movieData.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title} Poster">
                <p>${movie.title}</p>
            `;
            postersDiv.appendChild(movieDiv);
        });
    }

    updateScreen('screen1', movies.screen1);
    updateScreen('screen2', movies.screen2);
});
