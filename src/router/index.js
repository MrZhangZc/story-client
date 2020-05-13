/*
 * @Descripttion: 路由管理
 * @Author: zhangzhichao
 * @Date: 2020-05-12 00:14:54
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-13 09:29:17
 */
import Vue from 'vue';
import Router from 'vue-router';
import HeroPage from '@/page/hero';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hero/:id',
      name: 'HeroPage',
      component: HeroPage,
    },
  ],
});
