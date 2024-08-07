import { init, parse } from 'cjs-module-lexer';

await init();

const result = parse(`
    if(true) {
        module.exports = require('./a.cjs');
    } else {
        module.exports = require('./b.cjs');
    }
`);

console.log({ result });
console.log();