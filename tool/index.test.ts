/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-07-23 12:01:21
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-07-23 16:18:40
 * @FilePath: /fe-calc/tools/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { describe, expect, it } from 'vitest'
import { stSum } from '.'
describe('对stSum求和函数进行测试', () => {
  it('should return 3 with 1+2', () => {
    expect(stSum(1, 2)).toBe(3)
  })
  it('should return 0 with 0+0', () => {
    expect(stSum(0, 0)).toBe(0)
  })
  it('should return null with 2+null', () => {
    expect(stSum(2, null as any)).toBe(null)
  })
})

