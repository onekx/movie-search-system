<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="movie in $store.state.movies" :key="movie.id">
        <el-image :src="movie.cover" @click="movieDetail(movie)" class="image-style"></el-image>
        <el-button class="text" type="text" @click="movieDetail(movie)" v-text="movie.title"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      moviesInfo: []
    }
  },
  created() {
    this.$store.dispatch('getMovies')
  },
  methods: {
    movieDetail(movie) {
      window.location.href = movie.url
    }
  }
}
</script>

<style scoped>
.text {
  display: block;
  color: #333;
  font-size: 17px;
  margin: -60px auto 50px;
  padding: 0;
}

.image-style {
  height: 400px;
  width: 270px;
  cursor: pointer;
}
</style>