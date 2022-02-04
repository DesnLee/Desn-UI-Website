<template>
  <button><span></span></button>
</template>

<script lang = "ts" setup>

import Button from './Button.vue';</script>

<style lang = "scss" scoped>
  $btn-h: 44px;
  $btn-w: 72px;
  $gap: 4px;
  $span-wh: $btn-h - $gap * 2;

  button {
    position: relative;
    width: $btn-w;
    height: $btn-h;
    background: #42B983;
    //background: #30313316;
    border: none;
    border-radius: $btn-h/2;
    box-shadow: inset 0 0 (2 * $gap) #40424455;

    span {
      position: absolute;
      left: $gap;
      top: $gap;
      width: $span-wh;
      height: $span-wh;
      background: #FFF;
      border-radius: $span-wh/2;
      box-shadow: 0 0 (2 * $gap) #40424455;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .5s ease-in-out;

      &::after {
        display: inline-block;
        content: '';
        width: $btn-h/3;
        height: $btn-h/3;
        border: 2px solid #30313311;
        border-radius: 50%;
      }
    }

    &:hover > span {
      left: calc(100% - #{$span-wh + $gap});
    }
  }
</style>
