// background derived from album cover
const background = document.querySelector("#background");
const bodybg = document.querySelector("#bodybg");

// track album cover + wrapper
const thumbnail = document.querySelector("#thumbnail");
const trackVinyl = document.querySelector("#track_image");

// audio object
const song = document.querySelector("#song");

// track details
const songArtist = document.querySelector(".song-artist");
const songTitle = document.querySelector(".song-title");

// track progress bar
const progressBar = document.querySelector("#progress-bar");
let pPause = document.querySelector("#play-pause");

songIndex = 0;
// object storing paths for audio objects
songs = [
  // Too Many Nights
  "https://offblogmedia.com/wp-content/uploads/2023/04/Metro_Boomin_Ft_Don_Toliver_Future_-_Too_Many_Nights_Offblogmedia.com.mp3",
  // Cinderella
  "https://audmak.icu/wp-content/uploads/2024/03/09.%20Cinderella%20-%20%28Hiphopde.com%29.mp3",
  // Am I Dreaming
  "https://audmak.icu/wp-content/uploads/2023/05/02.%20Am%20I%20Dreaming%20-%20%28Hiphopde.com%29.mp3",
  // Mr. Right Now
  "https://offblogmedia.com/wp-content/uploads/2024/03/21_Savage_Metro_Boomin_Ft_Drake_-_Mr_Right_Now_Offblogmedia.com.mp3",
];
// object storing paths for album covers and backgrounds
thumbnails = [
  // Heroes & Villains
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/metroboomin2.gif",
  // We Don't Trust You
  "https://assets.codepen.io/4927073/433452617_952539916241903_4937267218052324278_n.jpg",
  // Metro Spider
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/metroboomin4.gif",
  // Savage Mode II
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/21xmetro.gif",
];
backgrounds = [
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/HeroesVillains2.png",
  "https://assets.codepen.io/4927073/433452617_952539916241903_4937267218052324278_n.jpg",
  "https://raw.githubusercontent.com/hluebbering/web-design/main/assets/images/metrospider.png",
  "https://media.pitchfork.com/photos/5f7b3ba12dd72c64377cf95b/1:1/w_3000,h_3000,c_limit/savage%20mode%202_21%20savage%20metro%20boomin.jpg",
];
// object storing track artists
songArtists = [
  "Metro Boomin",
  "Metro Boomin, Future",
  "Metro Boomin, A$AP Rocky",
  "Metro Boomin",
];
// object storing track titles
songTitles = [
  "Too Many Nights <span id='h2'>(feat. Don Toliver &amp; Future)</span>",
  "Cinderella",
  "Am I Dreaming",
  "Mr. Right Now <span id='h2'>(feat. Drake)</span>",
];
// object storing track font color
songColors = ["white", "#b41c10", "white", "white"];
songAlbums = [
  "Heroes and Villains",
  "We Don’t Trust You",
  "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
  "Savage Mode II",
];

// function changes play-pause (pp) element based on boolean value "playing". If play clicked, change pp.src to pause and call song.play() and vice versa.
let playing = true;
function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      thumbnail = document.querySelector("#thumbnail");

    pPause.classList.remove("fa-play");
    pPause.classList.add("fa-pause");

    trackVinyl.style.transform = "scale(1.15)";

    song.play();
    playing = false;
  } else {
    pPause.classList.remove("fa-pause");
    pPause.classList.add("fa-play");

    trackVinyl.style.transform = "scale(1)";

    song.pause();
    playing = true;
  }
}

// automatically play next song when current audio ends
song.addEventListener("ended", function () {
  nextSong();
});

// function increments songIndex, updates song details and images, then runs playPause() to play next song
function nextSong() {
  songIndex++;
  if (songIndex > 3) {
    songIndex = 0;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  bodybg.style.backgroundImage = "url('" + backgrounds[songIndex] + "')";

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];
  songTitle.style.color = songColors[songIndex];

  playing = true;
  playPause();
}

// songIndex decremented, song details and images update to previous index, and playPause() plays previous track
function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 3;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  bodybg.style.backgroundImage = "url('" + backgrounds[songIndex] + "')";

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];
  songTitle.style.color = songColors[songIndex];

  playing = true;
  playPause();
}

// update progressBar.max to song duration
function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(song.currentTime)
  );
  if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

// format song.currentTime and song.duration to MM:SS
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

// run updateProgressValue every 0.5s to show change in progressBar and song.currentTime on DOM
setInterval(updateProgressValue, 500);

// progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
  song.currentTime = progressBar.value;
}
