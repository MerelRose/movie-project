const jsonData = [
    {
        "id": 1,
        "movie_type": "TV MiniSeries"
    },
    {
        "id": 2,
        "movie_type": "TV Series"
    },
    {
        "id": 3,
        "movie_type": "Movie"
    },
    {
        "id": 4,
        "movie_type": "Short"
    },
    {
        "id": 5,
        "movie_type": "TV Movie"
    },
    {
        "id": 6,
        "movie_type": "TV Episode"
    },
    {
        "id": 7,
        "movie_type": "TV Special"
    },
    {
        "id": 8,
        "movie_type": "Video"
    },
    {
        "id": 9,
        "movie_type": "Videogame"
    }
];

generateCards(jsonData, 'type-container');

function generateCards(data, containerId) {
  const scrollContainer = document.getElementById(containerId);
  data.forEach(type => {
    const card = createCard(type.movie_type);
    scrollContainer.appendChild(card);
  });
}

// function createCard(type) {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   card.textContent = type;
//   return card;
// }

function getImageUrl(genre) {
    return `img/${genre.toLowerCase()}.jpg`;
    console.log('image works')
}

function createCard(genre) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.style.backgroundImage = `url('${getImageUrl(genre)}')`;
  
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    card.appendChild(overlay);
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
  
    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = genre;
    cardContent.appendChild(title);
  
    card.appendChild(cardContent);
  
    return card;
}
