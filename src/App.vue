<!--
 * @Descripttion: vue 入口文件
 * @Author: zhangzhichao
 * @Date: 2020-05-12 00:14:54
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-12 18:24:20
 -->
<template>
  <div id="app">
    <app-header class="app-header">
    </app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  weight: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #F3F3F3;
  color: #2c3e50;
  height: 100%;
}
.app-header {
  z-index: 100;
}
</style>
