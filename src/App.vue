<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <router-link to="/">首页</router-link>
    <span>_|_</span>
    <router-link to="/index">haha</router-link>
  </div>
  <router-view />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
