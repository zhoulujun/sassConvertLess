
# sass2less sass2css less2css tools

sass less css 互转的工具

css2less  https://github.com/sshmyg/css2less/pulls

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
