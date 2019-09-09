# selectFiles

[![Build Status](https://travis-ci.org/VitorLuizC/select-files.svg?branch=master)](https://travis-ci.org/VitorLuizC/select-files)
[![License](https://badgen.net/github/license/VitorLuizC/select-files)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/select-files)](https://bundlephobia.com/result?p=select-files)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/select-files)](https://bundlephobia.com/result?p=select-files)

Virtually creates a file input element (`<input type="file" />`), triggers it and returns selected files.

```js
import selectFiles from 'select-files';

selectFiles({ accept: 'image/*', capture: 'camera' }).then(files => {
  // ...
});
```

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install select-files --save

# For Yarn, use the command below.
yarn add select-files
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/select-files"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/select-files"></script>

<script>
  // UMD module is exposed through the "selectFiles" global function.
  selectFiles({ multiple: true }).then(files => {
    console.log(files);
  });
</script>
```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
