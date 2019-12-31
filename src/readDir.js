const fs = require('fs')

/**
 * author zhoulujun.cn
 * version 1.0
 * 读取文件目录
 * @param dirFatherPath {String} 文件目录
 * @param operateFileFun {Function} 操作文件的回调函数
 */
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