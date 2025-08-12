const stevescream = [
    'H:/Github/Evivinya.github.io/Audio/steveah1.mp3',
    'H:/Github/Evivinya.github.io/Audio/steveah2.mp3',
    'H:/Github/Evivinya.github.io/Audio/steveah3.mp3'
];

document.getElementById('playRandom').addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[randomIndex]);
  audio.play();
});