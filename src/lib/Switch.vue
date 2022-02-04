<template>
  <button :class = "{checked}" @click = "toggle"><span></span></button>
</template>

<script lang = "ts" setup>
  import { ref } from 'vue';
  import Button from './Button.vue';

  const checked = ref(false);
  const toggle = () => {
    checked.value = !checked.value;
  };

</script>

<style lang = "scss" scoped>
  $btn-h: 44px;
  $btn-w: 72px;
  $gap: 4px;
  $span-wh: $btn-h - $gap * 2;

  button {
    position: relative;
    width: $btn-w;
    height: $btn-h;
    background: #30313324;
    border: none;
    border-radius: $btn-h/2;
    box-shadow: inset 0 0 (2 * $gap) #40424455;
    transition: all .5s ease-in-out;

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

    &.checked {
      background: #42B983;

      > span {
        left: calc(100% - #{$span-wh + $gap});
      }
    }
  }
</style>
