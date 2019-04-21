<template>
  <div id="app">
    <div id="center">
      <h1>Vue Music</h1>
      <div class="input-wrapper">
        <input type="text" name="search" id="search" placeholder="Search...">
        <i class="fas fa-search"></i>
      </div>
    </div>
    
    <playlists/>
    <tracks/>
    <albums/>
    <artists/>
    <audio-player/>
  </div>
</template>

<script>
import Tracks from "./components/Tracks.vue";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Playlists from "./components/Playlists";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";

export default {
  name: "app",
  components: {
    Tracks,
    Albums,
    Artists,
    Playlists,
    AudioPlayer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "assets/styles/_variables.scss";
@import url("https://fonts.googleapis.com/css?family=Arimo:400,700");

body {
  font-family: "Arimo", sans-serif;
  background-color: $primary;
  color: $text;
  padding: 0;
  margin: 0;
}

#center {
  text-align: center;
}

h1 {
  font-size: 40px;
  margin: 0;
}
input {
  border: none;
  border-radius: 15px;
  padding: 5px;
  margin-top: 20px;
  font-size: 15px;
}

.input-wrapper {
  i {
    padding-right: 10px;
    color: #459ce7;
    position: absolute;
    margin-left: -25px;
    margin-top: 25px;
  }
}
</style>