/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-07-23 12:01:21
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-07-23 20:52:38
 * @FilePath: /fe-calc/tools/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { describe, expect, it } from 'vitest';
import calc from '../src/index';
// import { expect, test } from 'vitest';

describe('加法运算', () => {
  it("should return 3 with 1.22+'2.11'", () => {
    expect(calc.add(1.22, '2.11')).toBe(3.33);
  });

  it('should return -1 with 0+(-1)', () => {
    expect(calc.add(0, -1)).toBe(-1);
  });

  it('should return 0 with 0+0', () => {
    expect(calc.add(0, 0)).toBe(0);
  });

  it('should return 0.3 with 0.1+0.2', () => {
    expect(calc.add(0.1, 0.2)).toBe(0.3); // 控制台 0.1+0.2=0.30000000000000004
  });

  it('should return 2.3331 with -1+3.3331', () => {
    expect(calc.add(-1, 3.3331)).toBe(2.3331);
  });

  it('should return 4.62954 with 1.75523+2.87431', () => {
    expect(calc.add(1.75523, 2.87431)).toBe(4.62954);
  });

  it('should return 1234567890123456789013 with 1234567890123456789012+1', () => {
    expect(calc.add(1234567890123456789012, 1)).toBe(1234567890123456789013); // 超长位数
  });
  it('should return 9007199254740992 with 9007199254740992+1', () => {
    expect(calc.add(9007199254740992, 1)).toBe(9007199254740992); // 最大安全数字 9007199254740991
  });

  // it('should return null with 2+null', () => {
  //   expect(calc.add(2, null as any)).toBe(null)
  // })
});

describe('减法运算', () => {
  it('should return -1 with "1"-2', () => {
    expect(calc.subtract('1', 2)).toBe(-1);
  });
  it('should return -0.89 with 1.22-"2.11"', () => {
    expect(calc.subtract(1.22, '2.11')).toBe(-0.89);
  });
  it('should return 1 with 0-(-1)', () => {
    expect(calc.subtract(0, -1)).toBe(1);
  });
  it('should return 0 with 0+0', () => {
    expect(calc.subtract(0, 0)).toBe(0);
  });
  it('should return 0.67 with 1+0.33', () => {
    expect(calc.subtract(1, 0.33)).toBe(0.67); // 控制台 1-0.33=0.6699999999999999
  });
  it('should return -4.3331 with -1-3.3331', () => {
    expect(calc.subtract(-1, 3.3331)).toBe(-4.3331);
  });
  it('should return -1.11908 with 1.75523-2.87431', () => {
    expect(calc.subtract(1.75523, 2.87431)).toBe(-1.11908);
  });
  it('should return 1234567890123456789011 with 1234567890123456789012-1', () => {
    expect(calc.subtract(1234567890123456789012, 1)).toBe(1234567890123456789011); // 超长位数
  });
  it('should return 9007199254740992 with 9007199254740992-(-1)', () => {
    expect(calc.subtract(9007199254740992, -1)).toBe(9007199254740992); // 最大安全数字 9007199254740991
  });
});

describe('乘法运算', () => {
  it('should return 2 with "1"*2', () => {
    expect(calc.multiply('1', 2)).toBe(2);
  });
  it('should return 2.5742 with 1.22*"2.11"', () => {
    expect(calc.multiply(1.22, '2.11')).toBe(2.5742);
  });
  it('should return 2.5742 with 1.22*"2.11"', () => {
    expect(calc.multiply(-1, 0)).toBe(-0); // 区分 1/0 === -1/0 // false
  });
  it('should return 0 with 1.*0', () => {
    expect(calc.multiply(1, 0)).toBe(0);
  });
  it('should return 0.4389 with 1.33*0.33', () => {
    expect(calc.multiply(1.33, 0.33)).toBe(0.4389); // 控制台1.33, 0.33=0.43890000000000007
  });
  it('should return -3.3331 with -1*3.3331', () => {
    expect(calc.multiply(-1, 3.3331)).toBe(-3.3331);
  });
  it('should return 5.0450751413 with 1.75523*2.87431', () => {
    expect(calc.multiply(1.75523, 2.87431)).toBe(5.0450751413);
  });
  it('should return 1234567890123456789012 with 1234567890123456789012*1', () => {
    expect(calc.multiply(1234567890123456789012, 1)).toBe(1234567890123456789012); // 超长位数
  });
  it('should return -9007199254740992 with 9007199254740992*-1', () => {
    expect(calc.multiply(9007199254740992, -1)).toBe(-9007199254740992); // 最大安全数字 9007199254740991
  });
});

describe('除法运算', () => {
  it('should return 0.5 with "1"/2', () => {
    expect(calc.divide('1', 2)).toBe(0.5);
  });
  it('should return -Infinity with -1/0', () => {
    expect(calc.divide(-1, 0)).toBe(-Infinity); // 区分-Infinity和Infinity
  });
  it('should return Infinity with 1/0', () => {
    expect(calc.divide(1, 0)).toBe(Infinity);
  });
  it('should return -0 with 0/-1', () => {
    expect(calc.divide(0, -1)).toBe(-0); // 区分 1/0 === -1/0 // false
  });
  it('should return 0 with 0/1)', () => {
    expect(calc.divide(0, 1)).toBe(0);
  });
  it('should return 0.5781990521327014 with 1.22/"2.11"', () => {
    expect(calc.divide(1.22, '2.11')).toBe(0.5781990521327014);
  });
  it('should return 0.3333333333333333 with 1/3', () => {
    expect(calc.divide(1, 3)).toBe(0.3333333333333333); // 控制台1.33, 0.33=0.43890000000000007
  });
  it('should return 4 with 10/2.5', () => {
    expect(calc.divide(10, 2.5)).toBe(4);
  });

  it('should return 0.610661341330615 with 1.75523/2.87431', () => {
    expect(calc.divide(1.75523, 2.87431)).toBe(0.610661341330615);
  });
  it('should return 1234567890123456789012 with 1234567890123456789012/1', () => {
    expect(calc.divide(1234567890123456789012, 1)).toBe(1234567890123456789012); // 超长位数
  });
  it('should return -9007199254740992 with 9007199254740992/-1', () => {
    expect(calc.divide(9007199254740992, -1)).toBe(-9007199254740992); // 最大安全数字 9007199254740991
  });
});
