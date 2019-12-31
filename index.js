const fs = require('fs')
const readDir = require('./src/readDir')
const sass2css = require('./src/sass2css')
const css2less = require('./src/css2less')


function sass2less (dir, sassToCssOptions, cssToLessOptions = {updateColors: true}) {
    readDir(dir, (path, file) => {
        let arrFile = file.split('.')
        let fileType = arrFile.pop()
        let fileName = arrFile.join('')
        if (fileType === 'scss' || fileType === 'sass') {
            debugger
            sass2css(`${path}/${file}`, sassToCssOptions).then(data => {
                debugger
                // if (data.status !== 0) {
                //     return false
                // }
                let cssString = data.text
                let resultString = css2less(cssString, cssToLessOptions)
                fs.writeFile(`${path}/${fileName}.less`, resultString, (err) => {
                    console.log(err)
                })
            })
        }

    })
}

module.exports = {sass2less, css2less, sass2css}