const read = require("./lib/file/read");
const write = require("./lib/file/write");
const generator = require("./lib/hash/generator");

read(['dist', 'bundle.js'])
    .then(text => generator(text))
    .then(hash => write(['dist', 'bundle.hash'], hash))
    .then(() => read(['dist', 'bundle.hash']))
    .then(hash => console.log('Generated hash:', hash))
    .catch(console.error)