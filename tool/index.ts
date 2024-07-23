/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-07-23 12:01:21
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-07-23 16:23:08
 * @FilePath: /fe-calc/tools/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 求和函数
 * @param {*}
 * @return {*}
 */
function stSum(a: number, b: number) {
    if(typeof a !== 'number') return a;
    if(typeof b !== 'number') return b;
    return a + b;
  }
  export {
    stSum
  }
