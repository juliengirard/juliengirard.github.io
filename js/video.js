const video = document.getElementById('homeVideo');
const playPauseButton = document.querySelector('.play-pause');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = '❚❚'; // Pause symbol
    } else {
        video.pause();
        playPauseButton.textContent = '▶'; // Play symbol
    }
}

// Set the correct initial symbol
video.onplay = function() {
    playPauseButton.textContent = '❚❚'; // Pause
}

video.onpause = function() {
    playPauseButton.textContent = '▶'; // Play
}



