<template>
  <div id="artists">
    <h5 class="header">Top Artists</h5>
    <select name="range" v-model="range">
      <option value="day">Day</option>
      <option value="week">Week</option>
      <option value="month">Month</option>
      <option value="year">Year</option>
      <option value="life">Life</option>
    </select>
    <br>
    <div id="top-artists">
      <div class="artist" v-for="artist in artists" :key="artist.id">
        <img
          class="artist__cover"
          :src="'https://api.napster.com/imageserver/v2/artists/' + artist.id  + '/images/633x422.jpg'"
        >
        <div class="artist__name">
          <p>{{artist.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "artists",
  data() {
    return {
      artists: [],
      range: "day"
    };
  },
  created() {
    this.artistData();
  },
  watch: {
    range: function() {
      this.artistData();
    }
  },
  methods: {
    artistData: function() {
      axios
        .get(
          "http://api.napster.com/v2.2/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=10&range=" +
            this.range
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.artists = response.data.artists;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#top-artists {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 75px;
}

.artist {
  margin: 30px;

  &__cover {
    border-radius: 5%;
    width: 200px;
    height: 176px;
  }

  &__name {
    font-weight: 700;
    color: #fff;
    font-size: 0.9375rem;
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
</style>
