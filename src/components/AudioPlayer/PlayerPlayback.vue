<template>
  <div class="player-playback">
    <div class="player-playback__time">{{progress | msToMinutes}}</div>
    <div class="player-playback__progress-bar">
      <vue-slider
        v-model="progress"
        v-on:drag-start="onDragStart"
        v-on:callback="onProgressChange"
        v-on:drag-end="onDragEnd"
        :max="songDuration"
        :tooltip="false"
        :dot-size="15"
        :process-style="{'background': '#1db954'}"
        :bg-style="{'background': '#737575'}"
      />
    </div>
    <div class="player-playback__time">{{songDuration | msToMinutes}}</div>
  </div>
</template>

<script>
export default {
  name: "player-playback",

  data() {
    return {
      progress: 0,
      progressInterval: null,
      isDragStart: false,
      songDuration: 0
    };
  },

  methods: {
    updateProgress() {
      clearInterval(this.progressInterval);
      this.progress = this.context.position;

      if (!this.context.paused) {
        this.progressInterval = setInterval(() => {
          if (this.playback && this.progress + 1000 <= this.songDuration) {
            this.progress = this.progress + 1000;
          }
        }, 1000);
      }
    },

    onDragStart() {
      this.isDragStart = true;
    },

    onDragEnd() {
      this.isDragStart = false;
      // api.spotify.player.seekToPosition(currentValue);
    },

    onProgressChange() {
      if (!this.isDragStart) {
        this.isDragStart = false;
        // api.spotify.player.seekToPosition(currentValue);
      }
    }
  },

  watch: {
    playback() {
      this.songDuration = this.playback.item.duration_ms;
    },

    context() {
      this.progress = this.context.position;
    },

    isPlaying() {
      this.updateProgress();
    }
  },

  created() {
    this.updateProgress();
    this.songDuration = this.playback.item.duration_ms;
  }
};
</script>

<style lang="sass">

  .player-playback
    display: flex
    width: 100%

    &__time
      min-width: 40px

    &__progress-bar
      width: 100%

</style>
