const genreData = [
    {
        "genreId": 1,
        "genre": "Drama"
    },
    {
        "genreId": 2,
        "genre": "Unknown"
    },
    {
        "genreId": 3,
        "genre": "Comedy"
    },
    {
        "genreId": 4,
        "genre": "Documentary"
    },
    {
        "genreId": 5,
        "genre": "Game-Show"
    },
    {
        "genreId": 6,
        "genre": "Reality-TV"
    }
];

generateCards(genreData, 'genre-container');

function generateCards(data, containerId) {
  const scrollContainer = document.getElementById(containerId);
  data.forEach(genre => {
    const card = createCard(genre);
    card.addEventListener('click', () => showGenreMovies(genre.genreId));
    scrollContainer.appendChild(card);
  });
}

function getImageUrl(genre) {
    return `img/${genre.toLowerCase()}.jpg`;
}

function createCard(genre) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.style.backgroundImage = `url('${getImageUrl(genre.genre)}')`;
  
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    card.appendChild(overlay);
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
  
    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = genre.genre;
    cardContent.appendChild(title);
  
    card.appendChild(cardContent);
  
    return card;
}

function showGenreMovies(genreId) {

    const movies = [
        {
            "id": 1,
            "title": "The Shawshank Redemption",
            "year": 1994,
            "duration_minutes": 142,
            "genreId": 1,
            "name": "Drama"
        },
        {
            "id": 2,
            "title": "Inception",
            "year": 2010,
            "duration_minutes": 148,
            "genreId": 2,
            "name": "Unknown"
           
        },
        {
            "id": 3,
            "title": "The Big Lebowski",
            "year": 1998,
            "duration_minutes": 117,
            "genreId": 3,
            "name": "Comedy"
            
        },
        {
            "id": 4,
            "title": "Jiro Dreams of Sushi",
            "year": 2011,
            "duration_minutes": 81,
            "genreId": 4,
            "name": "Documentary"
            
        },
        {
            "id": 5,
            "title": "The Price Is Right",
            "year": 1972,
            "duration_minutes": 60,
            "genreId": 5,
            "name": "Game-Show"
            
        },
        {
            "id": 6,
            "title": "Survivor",
            "year": 2000,
            "duration_minutes": 60,
            "genreId": 6,
            "name": "Reality-TV"
        },
        {
            "id": 7,
            "title": "Forrest Gump",
            "year": 1994,
            "duration_minutes": 142,
            "genreId": 1,
            "name": "Drama"
        },
        {
            "id": 8,
            "title": "Lost in Translation",
            "year": 2003,
            "duration_minutes": 102,
            "genreId": 2,
            "name": "Unknown"
        },
        {
            "id": 9,
            "title": "Superbad",
            "year": 2007,
            "duration_minutes": 113,
            "genreId": 3,
            "name": "Comedy"
        },
        {
            "id": 10,
            "title": "March of the Penguins",
            "year": 2005,
            "duration_minutes": 80,
            "genreId": 4,
            "name": "Documentary"
        },
        {
            "id": 11,
            "title": "Jeopardy!",
            "year": 1964,
            "duration_minutes": 30,
            "genreId": 5,
            "name": "Game-Show"
        },
        {
            "id": 12,
            "title": "The Bachelor",
            "year": 2002,
            "duration_minutes": 120,
            "genreId": 6,
            "name": "Reality-TV"
        },
        {
            "id": 13,
            "title": "12 Angry Men",
            "year": 1957,
            "duration_minutes": 96,
            "genreId": 1,
            "name": "Drama"
        },
        {
            "id": 14,
            "title": "Eternal Sunshine of the Spotless Mind",
            "year": 2004,
            "duration_minutes": 108,
            "genreId": 2,
            "name": "Unknown"
        },
        {
            "id": 15,
            "title": "Anchorman: The Legend of Ron Burgundy",
            "year": 2004,
            "duration_minutes": 94,
            "genreId": 3,
            "name": "Comedy"
        },
        {
            "id": 16,
            "title": "Man on Wire",
            "year": 2008,
            "duration_minutes": 94,
            "genreId": 4,
            "name": "Documentary"
        },
        {
            "id": 17,
            "title": "Wheel of Fortune",
            "year": 1975,
            "duration_minutes": 30,
            "genreId": 5,
            "name": "Game-Show"
        },
        {
            "id": 18,
            "title": "The Real Housewives of Beverly Hills",
            "year": 2010,
            "duration_minutes": 42,
            "genreId": 6,
            "name": "Reality-TV"
        },
        {
            "id": 19,
            "title": "Good Will Hunting",
            "year": 1997,
            "duration_minutes": 126,
            "genreId": 1,
            "name": "Drama"
        },
        {
            "id": 20,
            "title": "Blade Runner",
            "year": 1982,
            "duration_minutes": 117,
            "genreId": 2,
            "name": "Unknown"
        }
    ];

    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';
    
    const filteredMovies = movies.filter(movie => movie.genreId === genreId);
    
    filteredMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `<h3>${movie.title}</h3>
                                  <p>Year: ${movie.year}, Duration: ${movie.duration_minutes} minutes</p>`;
        moviesContainer.appendChild(movieElement);
    });

    // document.getElementById('genre-container').style.display = 'none';
    moviesContainer.style.display = 'block';
}