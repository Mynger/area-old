const videoElement = document.querySelector('video');

videoElement.addEventListener('click', () => {
  videoElement.paused ? videoElement.play() : videoElement.pause()})