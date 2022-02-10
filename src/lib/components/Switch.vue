<template>
  <button :class = "[{ 'desn-checked': value }, `desn-switch-${size}`]"
          :style = "{ background: value ? color : normalColor }" class = "desn-switch" @click = "toggle"
  >
    <span class = "circle"></span>
    <span v-if = "text" class = "text">{{ text[!value + ''] }}</span>
  </button>
</template>

<script lang = "ts">
  export default {
    props: {
      value: { type: Boolean, default: false },
      size: { type: String, default: 'normal' },
      color: { type: String, default: '#42B983' },
      text: { type: Object }
    },
    setup(props, context) {
      const normalColor = '#30313324';

      const toggle = () => {
        context.emit('update:value', !props.value);
      };
      return {
        normalColor,
        toggle
      };
    }
  };
</script>

<style lang = "scss">
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

.desn-switch {
  display: inline-block;

  &.desn-switch-small {
    width: $btn-w-small;
    height: $btn-h-small;
    border-radius: calc(#{$btn-h-small} / 2);
    box-shadow: inset 0 0 (2 * $gap-small) #40424455;

    > .circle {
      left: $gap-small;
      top: $gap-small;
      width: $span-wh-small;
      height: $span-wh-small;
      border-radius: calc(#{$span-wh-small} / 2);
      box-shadow: 0 0 (2 * $gap-small) #40424455;

      &::after {
        width: calc(#{$btn-h-small} / 4);
        height: calc(#{$btn-h-small} / 4);
      }
    }

    &.desn-checked > .circle {
      left: calc(100% - #{$span-wh-small + $gap-small});
    }

    .text {
      font-size: 12px;
      top: calc(#{$btn-h-small - 12px} / 2);
      left: calc(100% - #{24px + $gap-small});
    }

    &.desn-checked > .text {
      left: $gap-small;
      color: #FFF;
    }
  }

  &.desn-switch-normal {
    width: $btn-w-normal;
    height: $btn-h-normal;
    border-radius: calc(#{$btn-h-normal} / 2);
    box-shadow: inset 0 0 (2 * $gap-normal) #40424455;

    > .circle {
      left: $gap-normal;
      top: $gap-normal;
      width: $span-wh-normal;
      height: $span-wh-normal;
      border-radius: calc(#{$span-wh-normal} / 2);
      box-shadow: 0 0 (2 * $gap-normal) #40424455;

      &::after {
        width: calc(#{$btn-h-normal} / 3);
        height: calc(#{$btn-h-normal} / 3);
      }
    }

    &.desn-checked > .circle {
      left: calc(100% - #{$span-wh-normal + $gap-normal});
    }

    .text {
      font-size: 14px;
      top: calc(#{$btn-h-normal - 14px} / 2);
      left: calc(100% - #{28px + $gap-normal});
    }

    &.desn-checked > .text {
      left: $gap-normal;
      color: #FFF;
    }
  }

  &.desn-switch-large {
    width: $btn-w-large;
    height: $btn-h-large;
    border-radius: calc(#{$btn-h-large} / 2);
    box-shadow: inset 0 0 (2 * $gap-large) #40424455;

    > .circle {
      left: $gap-large;
      top: $gap-large;
      width: $span-wh-large;
      height: $span-wh-large;
      border-radius: calc(#{$span-wh-large} / 2);
      box-shadow: 0 0 (2 * $gap-large) #40424455;

      &::after {
        width: calc(#{$btn-h-large} / 3);
        height: calc(#{$btn-h-large} / 3);
      }
    }

    &.desn-checked > .circle {
      left: calc(100% - #{$span-wh-large + $gap-large});
    }

    .text {
      font-size: 15px;
      top: calc(#{$btn-h-large - 15px} / 2);
      left: calc(100% - #{30px + $gap-large});
    }

    &.desn-checked > .text {
      left: $gap-large;
      color: #FFF;
    }
  }

  position: relative;
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
