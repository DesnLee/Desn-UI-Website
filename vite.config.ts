import VuePlugin from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Markdown from 'vite-plugin-md';

// https://vitejs.dev/config/
export default () => {
  return {
    plugins: [
      VuePlugin({
        include: [ /\.vue$/, /\.md$/ ],
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [ path.resolve(process.cwd(), 'src/assets/icons') ],
        // 指定symbolId格式
        symbolId: '[name]',
        customDomId: '__svg__icons__dom__',
      }),
      Markdown(),
    ],
  };
}
