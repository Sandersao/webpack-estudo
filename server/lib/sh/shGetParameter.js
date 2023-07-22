let parameterList = {
    port: 8080
}

process
    .argv
    .forEach(parameter => {
        if (parameter.match('=')) {
            const [name, value] =
                parameter.split('=')
            parameterList[name] = value
        }
    });

module.exports = parameterList