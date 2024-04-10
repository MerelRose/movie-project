const recomendedData = [
    { 
    "id": 1, 
    "recomended": "The Matrix", 
    "genre": "Action" 
    },
    { 
    "id": 2, 
    "recomended": "Inception", 
    "genre": "Sci-Fi" 
    },
    { 
    "id": 3, 
    "recomended": "Shawshank Redemption", 
    "genre": "Drama" 
    },
    { 
    "id": 4, 
    "recomended": "Pulp Fiction", 
    "genre": "Crime" 
    },
    { 
    "id": 5, 
    "recomended": "The Godfather", 
    "genre": "Crime" 
    }
];

generateCards(recomendedData, 'recomended-container');

function generateCards(data, containerId) {
  const scrollContainer = document.getElementById(containerId);
  data.forEach(recomended => {
    const card = createCard(recomended.recomended);
    scrollContainer.appendChild(card);
  });
}

// function createCard(recomended) {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   card.textContent = recomended;
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