import esbuild from 'rollup-plugin-esbuild'
import scss from 'rollup-plugin-scss'
import { terser } from "rollup-plugin-terser"
import vue from 'rollup-plugin-vue'
import dartSass from 'sass';

export default {
  input : 'src/lib/index.ts',
  output : [{
    globals : {
      vue : 'Vue'
    },
    name : 'Des-ui',
    file : 'dist/lib/Des-ui.js',
    format : 'umd',
    plugins : [terser()]
  }, {
    name : 'Des-ui',
    file : 'dist/lib/Des-ui.esm.js',
    format : 'es',
    plugins : [terser()]
  }],
  plugins : [
    scss({ include : /\.scss$/, sass : dartSass }),
    esbuild({
      include : /\.[jt]s$/,
      minify : process.env.NODE_ENV === 'production',
      target : 'es2015'
    }),
    vue({
      include : /\.vue$/,
    })
  ],
}
