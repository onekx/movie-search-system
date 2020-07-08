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
    <el-menu-item index="hot">热门</el-menu-item>
    <el-menu-item index="new">最新</el-menu-item>
    <el-menu-item index="classic">经典</el-menu-item>
    <el-menu-item index="high">高分</el-menu-item>
    <el-menu-item index="unpopular">冷门</el-menu-item>
    <el-menu-item index="china">华语</el-menu-item>
    <el-menu-item index="occident">欧美</el-menu-item>
    <el-menu-item index="korea">韩国</el-menu-item>
    <el-menu-item index="janpan">日本</el-menu-item>
    <el-menu-item index="action">动作</el-menu-item>
    <el-menu-item index="comedy">喜剧</el-menu-item>
    <el-menu-item index="love">爱情</el-menu-item>
    <el-menu-item index="science">科幻</el-menu-item>
    <el-menu-item index="suspense">悬疑</el-menu-item>
    <el-menu-item index="terror">恐怖</el-menu-item>
    <el-menu-item index="cure">治愈</el-menu-item>
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
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: 'hot',
      search: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSearch() {
      console.log(this.search)
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
