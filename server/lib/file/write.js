const fs = require('fs');
const path = require('path')

module.exports = (pathList, content) => {
    return new Promise((resolve, reject) => {
        try {
            const rootPath =
                __dirname
                    .split(path.sep)
                    .concat(['..', '..', '..'])
                    .concat(pathList)
            resolve(rootPath.join(path.sep))
        } catch (err) {
            reject(err)
        }
    })
        .then(realPathList => {
            console.log(realPathList);
            return new Promise((resolve, reject) => {
                try {

                    content =
                        ['number'].includes(typeof content) ?
                            content.toString() : content
                    resolve(fs.writeFileSync(realPathList, content))
                } catch (err) {
                    reject(err)
                }
            })
        })
        .catch(err => {
            console.error("Não foi possível gerar o arquivo solicitado", err);
        })
}