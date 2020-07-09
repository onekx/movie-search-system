<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="movie in $store.state.movies" :key="movie.id">
        <el-image :src="movie.cover" @click="movieDetail" class="image-style"></el-image>
        <el-button class="text" type="text" @click="movieDetail" v-text="movie.title"></el-button>
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
    movieDetail() {
      alert('ok')
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