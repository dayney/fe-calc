/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-07-23 12:01:21
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-07-23 20:34:50
 * @FilePath: /fe-calc/tools/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Decimal from 'decimal.js';

export default {
  /**
   * 加法运算
   * @param a 运算数1
   * @param b 运算数2
   */
  add: function (a: number | string, b: number | string): number {
    // if(typeof a !== 'number') return a;
    // if(typeof b !== 'number') return b;
    return new Decimal(a).add(new Decimal(b)).toNumber();
  },
  /**
   * 减法运算
   * @param a 运算数1
   * @param b 运算数2
   */
  subtract: function (a: number | string, b: number | string): number {
    return new Decimal(a).sub(new Decimal(b)).toNumber();
  },
  /**
   * 乘法运算
   * @param a 运算数1
   * @param b 运算数2
   */
  multiply: function (a: number | string, b: number | string): number {
    return new Decimal(a).mul(new Decimal(b)).toNumber();
  },
  /**
   * 除法运算
   * @param a 运算数1
   * @param b 运算数2
   */
  divide: function (a: number | string, b: number | string): number {
    return new Decimal(a).div(new Decimal(b)).toNumber();
  }
};
