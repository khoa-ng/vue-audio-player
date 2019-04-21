<template>
  <div class="current-track">
    <img
      class="current-track__cover"
      v-if="songAlbum"
      :src="'https://api.napster.com/imageserver/v2/albums/' + songAlbum  + '/images/500x500.jpg'"
    >
    <div class="current-track__info">
      <div class="current-track__name">{{ songName }}</div>

      <div class="current-track__artists">{{ songArtist }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "current-track",
  computed: {
    ...mapGetters(["songName", "songArtist", "songAlbum"])
  }
};
</script>

<style lang="scss" scoped>
.current-track {
  display: flex;
  align-items: center;

  &__cover {
    width: 56px;
    min-width: 56px;
    height: 56px;
    margin: 0 15px;
  }

  &__info {
    position: relative;
    overflow: hidden;
    padding-right: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__name {
    color: #fff;
    font-size: 14px;
  }

  &__artists {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px 0;
    font-size: 11px;
  }
}
</style>