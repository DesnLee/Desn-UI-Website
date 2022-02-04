<template>
  <button :class = "[{ checked: value }, `des-${size}-switch`]" :style = "{ background: value ? color : normalColor }"
          @click = "toggle"
  >
    <span class = "circle"></span>
    <span v-if = "text" class = "text">{{ text[!value + ''] }}</span>
  </button>
</template>

<script lang = "ts" setup>
import Button from './Button.vue';

const props = defineProps({
  value: { type: Boolean, default: false },
  size: { type: String, default: 'normal' },
  color: { type: String, default: '#42B983' },
  text: { type: Object }
});

const normalColor = '#30313324';

const emit = defineEmits([ 'update:value' ]);
const toggle = () => {
  emit('update:value', !props.value);
};
</script>

<style lang = "scss" scoped>
$btn-h-small: 24px;
$btn-w-small: 40px;
$gap-small: 2px;
$span-wh-small: $btn-h-small - $gap-small * 2;

$btn-h-normal: 32px;
$btn-w-normal: 56px;
$gap-normal: 3px;
$span-wh-normal: $btn-h-normal - $gap-normal * 2;

$btn-h-large: 40px;
$btn-w-large: 72px;
$gap-large: 4px;
$span-wh-large: $btn-h-large - $gap-large * 2;

button {
  display: inline-block;

  &.des-small-switch {
    width: $btn-w-small;
    height: $btn-h-small;
    border-radius: $btn-h-small/2;
    box-shadow: inset 0 0 (2 * $gap-small) #40424455;

    > .circle {
      left: $gap-small;
      top: $gap-small;
      width: $span-wh-small;
      height: $span-wh-small;
      border-radius: $span-wh-small/2;
      box-shadow: 0 0 (2 * $gap-small) #40424455;

      &::after {
        width: $btn-h-small/4;
        height: $btn-h-small/4;
      }
    }

    &.checked > .circle {
      left: calc(100% - #{$span-wh-small + $gap-small});
    }

    .text {
      font-size: 12px;
      top: ($btn-h-small - 12px) / 2;
      left: calc(100% - #{24px + $gap-small});
    }

    &.checked > .text {
      left: $gap-small;
      color: #FFF;
    }
  }

  &.des-normal-switch {
    width: $btn-w-normal;
    height: $btn-h-normal;
    border-radius: $btn-h-normal/2;
    box-shadow: inset 0 0 (2 * $gap-normal) #40424455;

    > .circle {
      left: $gap-normal;
      top: $gap-normal;
      width: $span-wh-normal;
      height: $span-wh-normal;
      border-radius: $span-wh-normal/2;
      box-shadow: 0 0 (2 * $gap-normal) #40424455;

      &::after {
        width: $btn-h-normal/3;
        height: $btn-h-normal/3;
      }
    }

    &.checked > .circle {
      left: calc(100% - #{$span-wh-normal + $gap-normal});
    }

    .text {
      font-size: 14px;
      top: ($btn-h-normal - 14px) / 2;
      left: calc(100% - #{28px + $gap-normal});
    }

    &.checked > .text {
      left: $gap-normal;
      color: #FFF;
    }
  }

  &.des-large-switch {
    width: $btn-w-large;
    height: $btn-h-large;
    border-radius: $btn-h-large/2;
    box-shadow: inset 0 0 (2 * $gap-large) #40424455;

    > .circle {
      left: $gap-large;
      top: $gap-large;
      width: $span-wh-large;
      height: $span-wh-large;
      border-radius: $span-wh-large/2;
      box-shadow: 0 0 (2 * $gap-large) #40424455;

      &::after {
        width: $btn-h-large/3;
        height: $btn-h-large/3;
      }
    }

    &.checked > .circle {
      left: calc(100% - #{$span-wh-large + $gap-large});
    }

    .text {
      font-size: 15px;
      top: ($btn-h-large - 15px) / 2;
      left: calc(100% - #{30px + $gap-large});
    }

    &.checked > .text {
      left: $gap-large;
      color: #FFF;
    }
  }

  position: relative;
  //background: #30313324;
  border: none;
  transition: background 0.25s ease-in-out;

  &:active .circle {
    transform: scaleX(120%);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 700px) {
    &:hover {
      animation: shine 1s ease-out infinite;
    }
  }

  //&.checked {
  //  background: #42B983;
  //}

  > .circle {
    z-index: 1;
    position: absolute;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease-in-out;

    &::after {
      display: inline-block;
      content: "";
      border: 2px solid #30313311;
      border-radius: 50%;
    }
  }

  > .text {
    position: absolute;
    line-height: 1;
    color: #909399;
    transition: left 0.25s ease-in-out;
  }
}

@keyframes shine {
  0% {
    box-shadow: 0 0 0 #00000066;
  }
  100% {
    box-shadow: 0 0 0 8px #00000000;
  }
}
</style>
