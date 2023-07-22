const shBuild = require("./lib/sh/command/shBuildBondle");
const shBuildBondleHash = require("./lib/sh/command/shBuildBondleHash");
const shProvide = require("./lib/sh/command/shProvide");

const logShMessage = shResponse => console.log(shResponse.msg)

shBuild()
    .then(logShMessage)
    .then(shBuildBondleHash)
    .then(logShMessage)
    .then(shProvide)
    .then(logShMessage)
    .catch(console.error)