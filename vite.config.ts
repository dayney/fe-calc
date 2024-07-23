/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-07-23 11:49:03
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-07-23 16:20:23
 * @FilePath: /fe-calc/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    target: 'es2015', // 设置构建目标为 ES2015，可以根据需要更改为 'esnext' 或 'modules'
    lib: {
      entry: 'tool/index.ts',
      name: 'tool',
      fileName: (formate) => `tool.${formate}.js`
    }
  }
})
