---
icon: terminal
---

# Command-line tool API

Buntralino's CLI allows you to quickly create new Buntralino projects and to build and run them. You can install Buntralino CLI with `bun install --global buntralino-cli`.

Buntralino CLI has the following commands:

## `buntralino create [name] [templateName]`

Creates an empty Buntralino project. The `name` argument is optional and is used to prefill application name — it can be changed later in `neutralino.config.json`.

`templateName` defines which template will be copied and configured for your project. Right now the two possible options are `new` (default) and `vite`.

If you don't specify the template name or all the arguments, an interactive prompt will appear.

## `buntralino add`

Adds Buntralino to the existing Neutralino.js project. Make sure to run this command in the root of your Neutralino.js project. (Where `neutralino.config.json` is.)

## `buntralino run [indexPath]` (or `buntralino start [indexPath]`)

Runs the Buntralino project. `indexPath` is the path to the main Bun file that uses `buntralino` package to open and manage windows. (Defaults to `index.ts` in the current working directory.)

You may also need to pass additional arguments to the script you run with the `--` separator. For example, you may need to call `buntralino run -- --devmode` to signal your project that it is running in the dev mode.

## `buntralino build [indexPath]`

Builds the project for distribution by building Neutralino.js application, bundling all the Bun scripts into an executable, and arranging the results for portable distribution. `indexPath` is the path to the main Bun file that uses `buntralino` package to open and manage windows. (Defaults to `index.ts` in the current working directory.)

Note that configuration for application name, its icons and metadata is taken from `neutralino.config.json`. You can find documentation for its fields [here](https://neutralino.js.org/docs/configuration/neutralino.config.json).

You may also need to pass additional arguments to the `bun build` command with a `--` separator. For example, if you need to add `--external original-fs` to the build command, use this:

```sh
buntralino build src/bun/index.ts -- --external original-fs
```

Minification flags, `--compile` and `--outfile` are already included — don't duplicate them.

## `buntralino --version`

Displays the current `buntralino-cli` version.

## `buntralino --help`

Displays help for commands.