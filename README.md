# Vihaan.github.io
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steve Harrington Button</title>
</head>
<body>
<p>Just a button that randomly plays Steve Harrington's screams TEST | Elephant greenscreen effect</p>
<button id="playRandomSound">Play Random Sound</button>
<script src="ah.js"></script>
<script>
document.getElementById('playRandom').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * stevescream.length);
    const audio = new Audio(stevescream[randomIndex]);
    audio.play();
});
</script>
</body>