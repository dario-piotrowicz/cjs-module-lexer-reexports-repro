# cjs-module-lexer-reexports-repro

This repo simply shows the fact that `cjs-module-lexer` can produce unhelpful reexport results.

Specifically, the lexer [resets the reexport set](https://github.com/nodejs/node/blob/2bcf9995d28758584f34382bc402995f268d1b64/deps/cjs-module-lexer/lexer.js#L913) causing only the last instance of `module.exports = require(...)` to be considered.

For example parsing the below code:

```js
if (true) {
  module.exports = require("./a.cjs");
} else {
  module.exports = require("./b.cjs");
}
```

yields `{ exports: [], reexports: [ './b.cjs' ] }`, completely loosing the information that the module is also trying to re-export from `'./a.cjs'`

## Reproduction steps

```
npm i
```

```
npm start
```
