/*
 * @Descripttion: Axios 封装
 * @Author: zhangzhichao
 * @Date: 2020-05-12 15:59:07
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-12 16:17:56
 */

import Axios from 'axios';

Axios.interceptors.response.use(
  response => response,
  (error) => {
    console.error(`the error.response.status is --- ${error.response}`);
    if (!error.response) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default Axios;
