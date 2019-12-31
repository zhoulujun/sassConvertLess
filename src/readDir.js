const fs = require('fs')

function readDir (dirFatherPath, operateFileFun) {
    fs.readdir(dirFatherPath, (err, fileList) => {
        if (err) {
            console.log('stop dir')
            return false
        }
        // 遍历文件夹下,fileList为文件列表
        fileList.forEach((item, index) => {
            fs.stat(`${dirFatherPath}/${item}`, (errFileType, dataFile) => {
                if (errFileType) {
                    console.log('去取文件错误', errFileType)
                    return false
                }
                if (dataFile.isDirectory()) {
                    readDir(`${dirFatherPath}/${item}`)
                    return false
                }
                operateFileFun && operateFileFun(dirFatherPath, item)
            })
        })
    })

}

module.exports = readDir