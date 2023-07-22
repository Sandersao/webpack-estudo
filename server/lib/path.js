const path = require('path')

module.exports = {
    rootDir: [__dirname, '..', '..'],
    fix(intendedPath) {
        const pathList = intendedPath
            .replace(path.sep, '/')
            .split('/')
        const rootPath = this
            .rootDir
            .concat(pathList)
        return path
            .join
            .apply(null, rootPath)
    }
}