import VuePlugin from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import mdPlugin, { Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default () => {
  return {
    plugins: [
      VuePlugin(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [ path.resolve(process.cwd(), 'src/assets/icons') ],
        // 指定symbolId格式
        symbolId: '[name]',
        customDomId: '__svg__icons__dom__',
      }),
      mdPlugin({
        mode: [
          Mode.HTML,
          Mode.TOC,
          Mode.VUE
        ]
      }),
    ],
  };
}
