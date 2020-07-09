<template>
  <el-menu
    :default-active="activeIndex"
    @select="handleSelect"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    class="el-menu"
  >
    <el-menu-item
      v-for="tag in allTags"
      :key="tag"
      :index="tag"
      v-text="tag"
      @click="updateContent"
    ></el-menu-item>
    <el-input
      class="el-input"
      v-model="search"
      placeholder="请输入电影名称"
      clearable
      @keyup.enter.native="handleSearch"
      prefix-icon="el-icon-search"
    ></el-input>
    <el-button type="text" class="search" @click="handleSearch">搜索</el-button>
  </el-menu>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '热门',
      search: '',
      allTags: []
    }
  },
  async created() {
    try {
      const { data } = await axios.get('/api/search_tags')
      this.allTags = data.tags
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    handleSelect(key) {
      this.$store.commit({
        type: 'updateTag',
        tag: key
      })
    },
    handleSearch() {
      console.log(this.search)
    },
    updateContent() {
      this.$store.dispatch('getMovies')
    }
  }
}
</script>

<style scoped>
.el-menu {
  display: flex;
  justify-content: center;
}

.el-input {
  width: 200px;
  margin-left: 30px;
}

.search {
  height: 40px;
  margin: 10px 0 0 10px;
  color: #fff;
  letter-spacing: 1px;
}

.search:hover {
  color: #ffd04b;
}

.search:focus {
  color: #ffd04b;
}
</style>
