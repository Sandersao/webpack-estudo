const ShData = require('../ShData')
const sh = require('../sh')

module.exports = () => {
    return sh('npm run buildHash','Hash da bundle gerada com sucesso')
}