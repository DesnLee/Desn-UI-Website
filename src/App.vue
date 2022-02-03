<template>
  <div class="img-wrapper">
    <img src="./assets/logo.png" alt="logo" />
  </div>
  <NavBar />
  <router-view />
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
