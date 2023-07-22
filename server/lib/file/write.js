const fs = require('fs');
const path = require('../path');

module.exports = (pathList, content) => {
    return new Promise((resolve, reject) => {
        try {
            content =
                ['number'].includes(typeof content) ?
                    content.toString() : content
            resolve(
                fs.writeFileSync(
                    path.fix(pathList),
                    content
                )
            )
        } catch (err) {
            reject(err)
        }
    })
        .catch(err => {
            console.error("Não foi possível gerar o arquivo solicitado", err);
        })
}