const sh = require('../sh')

module.exports = () => {
    return sh('npm run build', 'Bondle gerada com sucesso')
}