    const video = document.getElementById('homeVideo');
    video.playbackRate = 1; // Set to half speed


    // Set start time to 1 second once metadata is loaded
    video.onloadedmetadata = function() {
    video.currentTime = 5;
    };

    const playPauseButton = document.querySelector('.play-pause');
    
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);

    video.onplay = function() {
        playPauseButton.textContent = 'Pause';
    }

    video.onpause = function() {
        playPauseButton.textContent = 'Play';
    }
