<template>
  <button :class = "{checked:value}" @click = "toggle"><span></span></button>
  <div>{{ value }}</div>
</template>

<script lang = "ts" setup>
  import Button from './Button.vue';

  const props = defineProps({
    value: Boolean
  });
  const emit = defineEmits([ 'input' ]);

  const toggle = () => {
    emit('input', !props.value);
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
    transition: background .25s ease-in-out;

    &:focus {
      outline: none;
    }

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
      transition: left .25s ease-in-out;

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
