<template>
  <div class = "img-wrapper">
    <img alt = "logo" src = "./assets/logo.png" />
  </div>
  <NavBar />
  <router-view />
</template>

<script lang = "ts" setup>
import NavBar from './components/NavBar.vue';</script>

<style lang = "scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
}

.img-wrapper {
  margin: 0 auto;
  width: 200px;

  img {
    width: 100%;
  }
}
</style>
