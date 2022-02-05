<template>
  <button :class = "classList" class = "des-button">
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang = "ts" setup>
  const props = defineProps({
    theme: { type: String, default: 'button' },
    size: { type: String, default: 'normal' }

  });

  const classList = [
    `des-button-${ props.theme }`,
    `des-button-${ props.size }`,
  ];
</script>

<style lang = "scss">
  $btn-h-normal: 32px;
  $btn-h-small: 24px;
  $btn-h-large: 40px;

  .des-button {
    display: inline-flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    border: 1px solid #DDD;
    color: #404244;
    cursor: pointer;
    background: #FFF;

    &.des-button-small {
      font-size: 12px;
      height: $btn-h-small;
      border-radius: 3px;
      padding: {
        left: $btn-h-small/3;
        right: $btn-h-small/3;
      }
    }

    &.des-button-normal {
      font-size: 14px;
      height: $btn-h-normal;
      border-radius: 4px;
      padding: {
        left: $btn-h-normal/3;
        right: $btn-h-normal/3;
      }
    }

    &.des-button-large {
      font-size: 16px;
      height: $btn-h-large;
      border-radius: 5px;
      padding: {
        left: $btn-h-large/3;
        right: $btn-h-large/3;
      }
    }

    &.des-button-link {
      background: transparent;
      border: 1px solid transparent;
      color: #42B983;
      font-weight: bold;

      > span {
        position: relative;

        &::after {
          position: absolute;
          left: 0;
          bottom: -2px;
          content: "";
          width: 0;
          height: 2px;
          background: #42B983;
          transition: all .3s ease-in-out;
        }
      }
    }

    &.des-button-text {
      background: transparent;
      border: 1px solid transparent;
    }

    &.des-button-button:hover {
      color: #42B983;
      border: 1px solid #42B983;
    }

    &.des-button-link:hover {
      > span::after {
        width: 100%;
      }
    }

    &.des-button-text:hover {
      background: #00000008;
      color: #42B983;
    }
  }
</style>
