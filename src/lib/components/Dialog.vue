<template>
  <template v-if = "visible">
    <teleport to = "body">
      <div class = "desn-dialog-overlay" @click.self = "clickOverlay">
        <div class = "desn-dialog-wrapper">
          <div class = "desn-dialog">
            <div class = "desn-dialog-close-icon" @click = "close">
              <svg height = "16" viewBox = "0 0 1024 1024" width = "16" xmlns = "http://www.w3.org/2000/svg"
              ><path
                d = "M92.3 955c-6.4 0-12.9-2.5-17.8-7.4-9.8-9.8-9.8-25.7 0-35.6L912.6 73.9c9.8-9.8 25.7-9.8 35.6 0 9.8 9.8 9.8 25.7 0 35.6L110 947.6c-4.9 4.9-11.3 7.4-17.7 7.4z"
                fill = "#707277"
              ></path><path
                d = "M930.4 955c-6.4 0-12.9-2.5-17.8-7.4L74.5 109.5c-9.8-9.8-9.8-25.7 0-35.6 9.8-9.8 25.7-9.8 35.6 0l838.2 838.2c9.8 9.8 9.8 25.7 0 35.6-5 4.8-11.5 7.3-17.9 7.3z"
                fill = "#707277"
              ></path></svg>
            </div>
            <header>
              <slot name = "title">默认标题</slot>
            </header>
            <main>
              <slot name = "content">
                <p>默认内容1</p>
                <p>默认内容2</p>
              </slot>
            </main>
            <footer>
              <Button level = "lesser" theme = "text" @click = "clickCancel">Cancel</Button>
              <Button @click = "clickOk">OK</Button>
            </footer>
          </div>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang = "ts">
import Button from './Button.vue';

export default {
  props: {
    visible: { type: Boolean, default: false },
    closeOnOverlay: { type: Boolean, default: true },
    ok: Function,
    cancel: Function,
  },
  components: {
    Button
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };

    const clickOverlay = () => {
      if (props.closeOnOverlay) {
        close();
      }
    };

    const clickOk = () => {
      if (!props.ok) close();
      if (props.ok!() !== false) {
        close();
      }
    };

    const clickCancel = () => {
      props.cancel?.();
      close();
    };

    return {
      close,
      clickOverlay,
      clickOk,
      clickCancel,
    };
  }
};
</script>

<style lang = "scss">
  .desn-dialog-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background: #00000033;

    > .desn-dialog-wrapper {
      z-index: 20;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 24px #00000020;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      > .desn-dialog {
        background: #FFF;
        padding: 16px 24px;
        width: 320px;
        display: flex;
        flex-direction: column;

        > .desn-dialog-close-icon {
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

          > * {
            display: block;
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
