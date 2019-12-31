const compile = require('sass.js/dist/sass.node')

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
