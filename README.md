# Vihaan.github.io
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steve Harrington Button</title>
    <script src="ah.js"></script>
</head>
<body>
<p>Just a button that randomly plays Steve Harrington's screams TEST | Elephant greenscreen effect</p>
<button id="playRandomSound">Play Random Sound</button>
<script>
document.getElementById('playRandom').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * Array.length);
    const audio = new Audio(Array[randomIndex]);
    audio.play();
});
</script>
</body>