const exec = require('child_process').exec

class ShResponse {
    constructor(msg, stdout, sderr) {
        this.msg = msg
        this.stdout = stdout
        this.sderr = sderr
    }
}

module.exports = (command, msg) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, sderr) => {
            if (error) {
                reject(stdout)
            }
            resolve(new ShResponse(
                msg,
                stdout,
                sderr
            ))
        })
    })
}