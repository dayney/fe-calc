/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-07-23 19:33:32
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-07-23 20:06:21
 * @FilePath: /fe-calc/vitest.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['html', 'json-summary'],
      reportsDirectory: './__tests__/coverage',
    },
    // include: ['**/?(*.){test,spec}.?(c|m)[jt]s?(x)']
    include: ['__tests__/**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
});
