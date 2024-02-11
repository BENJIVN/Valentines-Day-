document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const gifContainer = document.getElementById('gifContainer');
    let fontSize = 16; 

noBtn.addEventListener('click', function() {
    fontSize += 50; 
    yesBtn.style.fontSize = `${fontSize}px`; 
});

yesBtn.addEventListener('click', function() {
    gifContainer.innerHTML = `
        <p class ="highlight">POG CHAMP MY POOKIE <3!</p>
        <img src="Images/dancingguy.gif" alt="Celebratory GIF">
        <audio id="valentineAudio" src="Music/SONG2YOU.mp3"></audio>
    `;
    gifContainer.style.display = 'flex';
    const newAudio = document.getElementById('valentineAudio'); 
    if (newAudio) {
        newAudio.volume = .05;
        newAudio.play().catch(error => console.error("Audio play failed:", error));
    }
});
gifContainer.addEventListener('click', function() {
    this.style.display = 'none';
    if (audio) {
        audio.pause(); 
        audio.currentTime = 0; 
    }
});

});