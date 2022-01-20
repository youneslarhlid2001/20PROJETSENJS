const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice');
const muteBtn = document.getElementById('mute');
const fullScreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');

btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause() {
    if (video.paused) {
        img.src = "ressources/pause.svg";
        video.play();
    }
    else {
        img.src = "ressources/play.svg";
        video.pause();
    }
}

// Barre Orange

video.addEventListener('timeupdate', () => {
    let juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";

    if (video.ended) {
        img.src = "ressources/play.svg";
    }
})

// Volume change

volumeSlider.addEventListener('change', () => {
    video.volume = volumeSlider.value / 100;
    console.log(video.volume);
})


// Mute change



muteBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        volumeSlider.value = 50;
        video.volume = volumeSlider.value / 100;
        muteBtn.innerText = "Mute";
    }
    else{
        video.muted = true;
        volumeSlider.value = 0;
        muteBtn.innerText = "Unmute";
    }
})

