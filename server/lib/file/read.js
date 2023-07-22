const fs = require('fs');
const path = require('path')

module.exports = (pathList) => {
    return new Promise((resolve, reject) => {
        try {
            const rootPath =
                [__dirname, '..', '..', '..']
                    .concat(pathList)
            const realPathList =
                path
                    .join
                    .apply(null, rootPath)
            resolve(fs
                .readFileSync(realPathList, 'utf8',)
            )
        } catch (err) {
            reject(err)
        }
    })
}