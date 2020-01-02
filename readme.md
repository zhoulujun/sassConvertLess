
# sass2less sass2css less2css tools

## sass less css 互转的工具
### demo
```javascript
const tools = require('./index')
tools.sass2less('./style')
```
### sass2less 函数参数说明
```javascript
/**
 * author zhoulujun.cn
 * version 1.0
 * @param dir {String} filePath 文件目录
 * @param sassToCssOptions {Object} sass输出配置文件，uuti参照 compile.Sass.style.expanded
 * @param cssToLessOptions css2less输出配置文件 参考 https://github.com/zhoulujun/css2less fork 自： https://github.com/sshmyg/css2less
 * @param fileWriteOptions fs.writeFile options
 */
function sass2less (dir, sassToCssOptions, cssToLessOptions = {updateColors: true}, fileWriteOptions = null) {
    // TODO 
}
```
 遍历文件下所有sass文件，将sass转less
+ 首先sass转为css，然后再将css转为less。
+ sass转css没有用 sass包，而是sass.js包。
+ css2less  参考 https://github.com/zhoulujun/css2less fork 自： https://github.com/sshmyg/css2less

修改 修改其中156 198行
```javascript
 var key = parts[0]
            var value = parts[1]
            if (!key) {
                return false
            }
            key = key.trim()
            if (typeof value === 'string') {
                value.trim()
            }
```
+ 将less文件写入文件