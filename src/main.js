/*
 * @Descripttion: 入口文件
 * @Author: zhangzhichao
 * @Date: 2020-05-12 00:14:54
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-12 16:20:55
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import http from './serviec/http';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
