<template>
  <NavBar />
  <router-view />
</template>

<script lang = "ts" setup>
import NavBar from './components/NavBar.vue';</script>

<style lang = "scss" scoped>
  @import "./assets/style/helper.scss";

  #app {
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
    font-size: 14px;
  }
</style>
