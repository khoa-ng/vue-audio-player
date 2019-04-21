<template>
  <div id="tracks">
    <h5 class="header">Top tracks</h5>

    <select name="range" v-model="range">
      <option value="day">Day</option>
      <option value="week">Week</option>
      
      <option value="month">Month</option>
      <option value="year">Year</option>
      <option value="life">Life</option>
    </select>
    <br>
    <div id="top-tracks">
      <div id="track" v-for="(track) in tracks" :key="track.id">
        <img
          @click="currentTrack(track), loadTrack()"
          class="cover"
          :src="'https://api.napster.com/imageserver/v2/albums/' + track.albumId  + '/images/500x500.jpg'"
        >

        <div class="content-name">
          <p>{{track.name}}</p>
        </div>
        <div class="artist-name">
          <p>{{track.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tracks",
  components: {},
  data() {
    return {
      tracks: [],
      range: "day"
    };
  },
  computed: {
    ...mapGetters(["songName", "songArtist", "songAlbum"])
  },
  created() {
    this.trackData();
  },
  watch: {
    range: function() {
      this.trackData();
    }
  },
  methods: {
    ...mapActions(["loadTrack"]),
    trackData: function() {
      axios
        .get(
          "http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=10&range=" +
            this.range
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.tracks = response.data.tracks;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    currentTrack: function(track) {
      this.$store.commit("setName", track.name);
      this.$store.commit("setArtist", track.artistName);
      this.$store.commit("setAlbum", track.albumId);
      this.$store.commit("setSong", track.previewURL);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#top-tracks {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}

#track {
  margin: 30px;
}

.cover {
  border-radius: 5%;
  width: 200px;
  height: 200px;

  &:hover {
    cursor: pointer;
  }
}

h5 {
  font-size: 1.4rem;
  color: #ddd;
  margin: 12px 30px;
}

select {
  font-size: 15px;
  margin: 0 30px;
}

p {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  margin: 5px 0;
}

.content-name {
  font-weight: 700;
  color: #fff;
  font-size: 0.9375rem;
}

.artist-name {
  font-size: 0.85rem;
}
</style>
