/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-07-23 14:59:31
 * @LastEditors: krui krui0728@gmail.com
 * @LastEditTime: 2024-07-23 16:18:05
 * @FilePath: /fe-calc/example/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');

module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'), // 静态文件目录
      compress: true, // 启用 gzip 压缩
      port: 9000 // 端口
    }
};
