async function fetchAndPlayVideo(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const video = document.getElementById('videoPlayer');
    const mediaSource = new MediaSource();
    video.src = URL.createObjectURL(mediaSource);

    mediaSource.addEventListener('sourceopen', async () => {
      const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
      let appendQueue = [];
      let isAppending = false;

      function processAppendQueue() {
        if (isAppending || appendQueue.length === 0) return;

        isAppending = true;
        const data = appendQueue.shift();

        sourceBuffer.addEventListener('updateend', () => {
          isAppending = false;
          processAppendQueue();
        });

        sourceBuffer.appendBuffer(data);
      }

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          mediaSource.endOfStream();
          break;
        }

        appendQueue.push(value);
        processAppendQueue();
      }
    });

  } catch (error) {
    console.error('Error fetching video:', error);
  }
}
// Usage
// const videoUrl = 'http://commondatastorage.googleapis.com/iamstorage.appspot.com/432Hz%20Sleep%20Music%20with%20Soothing%20Water%20Sound%20_%20Sleep%2C%20Meditation%2C%20Relaxation%2C%20Peaceful%20Music_2.mp4';
const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
fetchAndPlayVideo(videoUrl);