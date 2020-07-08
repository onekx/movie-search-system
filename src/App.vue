<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <Content />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  min-width: 1500px;
}

.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0 !important;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
