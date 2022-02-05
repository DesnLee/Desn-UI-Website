<template>
  <template v-if = "visible">
    <div class = "des-dialog-overlay" @click.self = "clickOverlay">
      <div class = "des-dialog-wrapper">
        <div class = "des-dialog">
          <div class = "des-dialog-close-icon" @click = "close">
            <svg class = "icon" height = "16" p-id = "10885" t = "1644070590318" version = "1.1"
                 viewBox = "0 0 1024 1024" width = "200" xmlns = "http://www.w3.org/2000/svg"
            ><path
              d = "M92.3 955c-6.4 0-12.9-2.5-17.8-7.4-9.8-9.8-9.8-25.7 0-35.6L912.6 73.9c9.8-9.8 25.7-9.8 35.6 0 9.8 9.8 9.8 25.7 0 35.6L110 947.6c-4.9 4.9-11.3 7.4-17.7 7.4z"
              fill = "#4F4F4F" p-id = "10886"
            ></path><path
              d = "M930.4 955c-6.4 0-12.9-2.5-17.8-7.4L74.5 109.5c-9.8-9.8-9.8-25.7 0-35.6 9.8-9.8 25.7-9.8 35.6 0l838.2 838.2c9.8 9.8 9.8 25.7 0 35.6-5 4.8-11.5 7.3-17.9 7.3z"
              fill = "#4F4F4F" p-id = "10887"
            ></path></svg>
          </div>
          <header>
            我是标题
          </header>
          <main>
            <p>我是第一行字</p>
            <p>我是第二行字</p>
          </main>
          <footer>
            <Button level = "lesser" theme = "text" @click = "clickCancel">Cancel</Button>
            <Button @click = "clickOk">OK</Button>
          </footer>
        </div>
      </div>
    </div>
  </template>
</template>

<script lang = "ts" setup>
import Button from './Button.vue';

const props = defineProps({
  visible: { type: Boolean, default: false },
  closeOnOverlay: { type: Boolean, default: true },
  ok: Function,
  cancel: Function,
});

const emit = defineEmits([ 'update:visible' ]);
const close = () => {
  emit('update:visible', false);
};

const clickOverlay = () => {
  if (props.closeOnOverlay) {
    close();
  }
};

const clickOk = () => {
  if (props.ok) {
    if (props.ok()) close();
  } else {
    close();
  }
};

const clickCancel = () => {
  if (props.cancel) {
    props.cancel();
  }
  close();
};
</script>

<style lang = "scss">
  .des-dialog-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background: #00000033;

    > .des-dialog-wrapper {
      z-index: 20;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 24px #00000020;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      > .des-dialog {
        background: #FFF;
        padding: 16px 24px;
        width: 320px;
        display: flex;
        flex-direction: column;

        > .des-dialog-close-icon {
          cursor: pointer;
          position: absolute;
          width: 16px;
          height: 16px;
          right: 24px;
          top: 16px;
          color: #606266;

          > svg {
            width: 100%;
          }
        }

        > header {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.2;
          color: #404244;
          padding-bottom: 8px;
          border-bottom: 1px solid #EEE;
        }

        > main {
          padding: 16px 0;
          font-size: 14px;
          color: #606266;
          border-bottom: 1px solid #EEE;

          > p {
            margin-bottom: 12px;
          }
        }

        > footer {
          margin-top: 8px;
          display: flex;
          justify-content: flex-end;

          > * {
            margin-right: 12px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
