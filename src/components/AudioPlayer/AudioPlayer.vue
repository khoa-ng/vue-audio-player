<template>
  <div class="audio-player">
    <div class="audio-player__inner">
      <current-track class="audio-player__left"/>

      <div class="audio-player__center">
        <player-controls/>
        <!-- <player-playback/> -->
      </div>

      <div class="audio-player__right">
        <!-- <device-picker/> -->
        <!-- <volume-bar/> -->
      </div>
    </div>
    <audio id="player" :src="song"></audio>
  </div>
</template>

<script>
import CurrentTrack from "./CurrentTrack";
import PlayerControls from "./PlayerControls";
import { mapGetters } from "vuex";
// import PlayerPlayback from './PlayerPlayback';

export default {
  name: "audio-player",
  components: {
    CurrentTrack,
    PlayerControls
    // PlayerPlayback
  },
  computed: {
    ...mapGetters(["song"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.audio-player {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  z-index: 2;
  background-color: $primary-d;

  &__inner {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__left {
    width: 30%;
    min-width: 180px;
  }

  &__right {
    display: flex;
    width: 30%;
    min-width: 180px;
  }

  &__center {
    width: 60%;
  }
}
</style>