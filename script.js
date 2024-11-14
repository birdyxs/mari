const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const playIcon = playPauseBtn.querySelector('.play-icon');
const pauseIcon = playPauseBtn.querySelector('.pause-icon');
const progress = document.getElementById('progress');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
});

progress.addEventListener('input', () => {
    const seekTime = (progress.value * audio.duration) / 100;
    audio.currentTime = seekTime;
});