# Vihaan.github.io
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steve Harrington Button</title>
</head>
<body>
<p>Just a button that randomly plays Steve Harrington's screams TEST | Elephant greenscreen effect</p>
<button id="playBtn">Make Steve Scream!</button>

<script>
// List of audio file URLs (replace with your actual audio file paths)
const sounds = [
    'Audio/steveah1.mp3',
    'Audio/steveah2.mp3',
    'Audio/steveah3.mp3'
];

document.getElementById('playBtn').addEventListener('click', () => {
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
});
</script>
</body>