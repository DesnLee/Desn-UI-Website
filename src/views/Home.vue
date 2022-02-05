<template>
  <NavBar />
  <div class = "banner">
    <h1>DesnLee - UI</h1>
    <h3>一个极简的 Vue.js v3 UI 组件库</h3>
    <p class = "actions">
      <a class = "link" href = "https://github.com" target = "_blank">Github</a>
      <router-link class = "link" to = "/doc/start">起步</router-link>
    </p>
  </div>
</template>

<script lang = "ts" setup>
import NavBar from '../components/NavBar.vue';</script>

<style lang = "scss" scoped>
  @import "../assets/style/helper";

  .banner {
    padding-top: $height-navbar;
    height: $height-navbar + 320px;
    background: steelblue;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    > .actions {
      .link {
        display: inline-block;
        text-align: center;
        border-radius: 23px;
        background: #FFFFFF33;
        padding: 12px 0;
        width: 96px;
        transition: all .5s;

        &:hover {
          background: #FFFFFF77;
        }
      }

      & > .link:first-child {
        margin-right: 24px;
      }
    }
  }
</style>
