<!--
 * @Descripttion: 英雄详情页面
 * @Author: zhangzhichao
 * @Date: 2020-05-12 15:54:00
 * @LastEditors: zhangzhichao
 * @LastEditTime: 2020-05-13 01:57:47
 -->
<template>
  <div class="container">
    <div class="hero-title">英雄联盟 --- {{ name }} 的背景故事</div>
    <img :src="imgSrc" alt="" class="heroImg">
    <div v-html="story" class="heroStory">
      <p>{{ story }}</p>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      name: '',
      imgSrc: '',
      story: '',
    };
  },
  methods: {
    async getHeroStory() {
      const heroId = this.$route.params.id;
      try {
        const data = await this.$http.get(`/getHeroInfo/${heroId}`);
        if (data.data.succ) {
          const hero = data.data.data;
          this.name = hero.name;
          this.imgSrc = hero.img;
          this.story = hero.storyData;
        }
      } catch (err) {
        Toast('内容加载出错，请重试');
      }
    },
  },
  mounted() {
    this.getHeroStory();
  },
};
</script>
<style>
.container {
  height: 100%;
  weight: 100%;
}
.hero-title {
  margin-top: 1em;
  line-height: 32px;
  font-size: 24px;
  text-align: left;
  padding: 0 12px;
  margin: 0;
}

.heroImg {
  margin-top: 20px;
  weight: 80%;
  height: 200px;
}

.heroStory {
  text-indent:2em;
  margin: 10px;
  font-size: 18px;
  line-height: 30px;
  white-space: pre-wrap;
}
.heroStory {
  text-align: justify;
  text-justify: inter-character
}
</style>
