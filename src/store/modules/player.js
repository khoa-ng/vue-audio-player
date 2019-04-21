// Set all global data necessary for Audio Player
const state = {
  name: "",
  artist: "",
  album: "",
  song: "",
  volume: 0.5,
  audioElement: null,
  isPlaying: false
};

// Gets data to send to components
const getters = {
  songName: state => state.name,
  songArtist: state => state.artist,
  songAlbum: state => state.album,
  song: state => state.song,
  audioElement: state => state.audioElement,
  isPlaying: state => state.isPlaying
};

const actions = {
  // Changes the song when song is selected
  loadTrack() {
    if(!state.audioElement) {
      state.audioElement = document.querySelector('#player');
    }
    state.audioElement.load();
    if(state.isPlaying === true) {
      setTimeout(() => {
        state.audioElement.play();
      }, 10);
    }
  },
  setIsPlaying(commit, isPlaying) {
    state.isPlaying = isPlaying;
  }
};

// Any changes to the data is updated
const mutations = {
  setName: (state, songName) => (state.name = songName),
  setArtist: (state, songArtist) => (state.artist = songArtist),
  setAlbum: (state, songAlbum) => (state.album = songAlbum),
  setSong: (state, song) => (state.song = song),
  setAudio: (state, song) => (state.audioElement = new Audio(song))
};

export default {
  state,
  getters,
  actions,
  mutations
};
