<!--
 * @Descripttion: 头部组件
 * @Author: zhangzhichao
 * @Date: 2020-05-12 16:55:00
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-12 18:20:42
 -->
<template>
  <transition name="slide-down">
    <header class="app-header">
      <div class="app-header-left"></div>
      <div class="header-middle">
        <img src="../../static/img/header.jpg" alt="" class="header-img">
        <div class="title">m小故事</div>
      </div>
      <div class="header right"></div>
    </header>
  </transition>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: #F3F3F3;
  color: #000;
  padding: 0;
  padding-top: 5px;
  padding-bottom: 5px;
}
.app-header div {
  display: flex;
  align-items: center;
}
.app-header .header-middle {
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.app-header .header-middle img{
  weight: 50px;
  height: 50px;
}
.app-header .header-left {
  weight: 52px;
  height: 100%;
}
.app-header .header-right {
  weight: 52px;
  height: 100%;
}
</style>
