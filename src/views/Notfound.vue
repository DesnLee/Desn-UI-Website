<template>
  <NavBar bg-color = "#FFF" max-width = "1000px" />
  <div>
    <div class = "pic-wrapper">
      <Icon name = "notfound" />
    </div>
    <h2>当前页面不存在，请检查 url</h2>
    <div class = "link-wrapper">
      <router-link class = "link" to = "/">返回首页</router-link>
    </div>
  </div>
</template>

<script lang = "ts" setup>
import Icon from '../components/Icon.vue';
import NavBar from '../components/NavBar.vue';</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper.scss";

  .pic {
    width: 200px !important;
    height: 200px !important;

    &-wrapper {
      text-align: center;
      margin-top: 48px;
    }
  }

  h2 {
    text-align: center;
    padding: 48px;
  }

  .link {
    color: $color-highlight;
    border-bottom: 1px solid $color-highlight;
    font-size: 16px;
    padding-bottom: 4px;
    text-align: center;

    &-wrapper {
      margin-top: 24px;
      text-align: center;
    }
  }
</style>
