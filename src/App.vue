<template>
  <router-view />
</template>

<script lang="ts" setup>
  import { provide, ref } from 'vue'
  import router from './router'

  let currentRoute = ref(router.currentRoute.value.fullPath)
  let asideVisible = ref(false)
  let isPC = ref(document.documentElement.clientWidth >= 700)

  window.addEventListener('resize', function () {
    isPC.value = document.documentElement.clientWidth >= 700
  })
  router.afterEach(() => {
    asideVisible.value = false
    currentRoute.value = router.currentRoute.value.fullPath
  })

  provide('asideVisible', asideVisible)
  provide('isPC', isPC)
  provide('currentRoute', currentRoute)
</script>

<style lang="scss" scoped>
  @import './assets/style/helper.scss';

  #app {
    font-family: $font-hei;
    margin-top: 60px;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
