const fs = require('fs');
const path = require('../path');


module.exports = (pathDir) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fs
                .readFileSync(
                    path.fix(pathDir),
                    'utf8'
                )
            )
        } catch (err) {
            reject(err)
        }
    })
}