<template>
  <button :class = "classList" class = "des-button">
    <slot />
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

    &:hover {
      color: #42B983;
      border: 1px solid #42B983;
    }


  }
</style>
