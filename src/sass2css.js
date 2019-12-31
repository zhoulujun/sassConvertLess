const compile = require('sass.js/dist/sass.node')

/**
 * author zhoulujun.cn
 * version 1.0
 * @param path {String} sass文件目录
 * @param options {Object} sass编译为css配置 option
 * @return {Promise<*>}
 */
function conventSass2css (
    path, options = {
        style: compile.Sass.style.expanded,
    }) {
    return new Promise(function (resolve) {
        compile(path, options, (result) => {
            resolve(result)
        })
    })

}

module.exports = conventSass2css
