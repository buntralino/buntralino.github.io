---
icon: code
---

# Programmatic use of `buntralino` CLI

Though `buntralino-cli` npm package is available as a CLI tool `buntralino`, it can be used directly through TypeScript as an ESM module:

```sh
bun install --dev buntralino-cli
```
```ts
import * as buntralino from 'buntralino-cli';

// Specify the main Bun file where you open Buntralino windows;
// it is passed to buntralino.run and buntralino.build as the only argument.
const buntralinoIndex = 'src/bun/index.ts';

// Run the Buntralino application and wait until it is closed
await buntralino.run(buntralinoIndex);

// Packages the Buntralino application for redistribution.
// Make sure to prebuild all the assets used by Neutralino beforehand.
await buntralino.build(buntralinoIndex);
```

Note that configuration for application name, its icons and metadata is taken from `neutralino.config.json`. You can find documentation for its fields [here](https://neutralino.js.org/docs/configuration/neutralino.config.json).