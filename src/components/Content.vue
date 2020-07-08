<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="movie in moviesInfo" :key="movie.id">
        <el-image :src="movie.cover" @click="movieDetail" class="image-style"></el-image>
        <el-button class="text" type="text" @click="movieDetail" v-text="movie.title"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Content',
  data() {
    return {
      moviesInfo: []
    }
  },
  async created() {
    try {
      const { data } = await axios.get(`/api/search_subjects?tag=热门`)
      this.moviesInfo = data.subjects
    } catch (err) {
      console.log(err)
    }
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