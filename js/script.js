const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
        name: "music_1",
        title: "FreeStyle",
        artist: "Talhah Yunus",
    },
    {
        name: "music_2",
        title: "EDM",
        artist: "Kaushal",
    },
    {
        name: "music_3",
        title: "Rock and Roll",
        artist: "Kare",
    },
];



let isPlaying = false;
//for play music
const playMusic = () => {

    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

//for pause music
const pauseMusic = () => {

    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

//onclick play and pause
play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }

    //or 
    //isPlaying ? pauseMusic() : playMusic();
});

//changing the track

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "image/" + songs.name + ".png";
};

songIndex = 0;
//loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();

    // 2 = 3 % 3    length==no. of songs in array obj
    // 2 = 0
    //return to 0

};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
    // traclnow = 2
    //  = (2 - 1) % 10
    // = 1 % 10
    // = 1
    //hence now the trace is goback by 1.

    /*
    this next and prev work everywhere. */
};


next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);