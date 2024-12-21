---
icon: terminal
---

# Command-line tool API

Buntralino's CLI allows you to quickly create new Buntralino projects and to build and run them. You can install Buntralino CLI with `bun install --global buntralino-cli`.

Buntralino CLI has the following commands:

## `buntralino create [name]`

Creates an empty Buntralino project. The `name` argument is optional and is used to prefill application name — it can be changed later in `neutralino.config.json`.

::: info Are you getting `could not determine executable to run for package` errors?
There is [an unresolved issue with `bunx`](https://github.com/oven-sh/bun/issues/9841) at this moment, but usually just removing the folder created by `buntralino create` and running the command again fixes the problem. Magic 🤷
:::

## `buntralino add`

Adds Buntralino to the existing Neutralino.js project. Make sure to run this command in the root of your Neutralino.js project. (Where `neutralino.config.json` is.)

## `buntralino run [indexPath]` (or `buntralino start [indexPath]`)

Runs the Buntralino project. `indexPath` is the path to the main Bun file that uses `buntralino` package to open and manage windows. (Defaults to `index.ts` in the current working directory.)

## `buntralino build [indexPath]`

Builds the project for distribution by building Neutralino.js application, bundling all the Bun scripts into an executable, and arranging the results for portable distribution. `indexPath` is the path to the main Bun file that uses `buntralino` package to open and manage windows. (Defaults to `index.ts` in the current working directory.)

Note that configuration for application name, its icons and metadata is taken from `neutralino.config.json`. You can find documentation for its fields [here](https://neutralino.js.org/docs/configuration/neutralino.config.json).

## `buntralino --version`

Displays the current `buntralino-cli` version.

## `buntralino --help`

Displays help for commands.