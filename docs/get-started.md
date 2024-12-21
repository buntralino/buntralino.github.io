---
icon: route
---

# Get started

You can create and build a Buntralino application in minutes. Here's how:

## 0. Install Bun

If you haven't installed Bun into your system yet, you can do it with the following command:

::: code-tabs#os
@tab Linux & macOS
```sh
curl -fsSL https://bun.sh/install | bash
```
@tab Windows
```bat
powershell -c "irm bun.sh/install.ps1 | iex"
```
:::

The same command can be used to update Bun. You may need to restart your terminal window if you're installing Bun for the first time.

## 1. Make a new Buntralino project

Instal the Buntralino CLI and create a Buntralino project:

::: code-tabs#newornot
@tab New project
```sh
bun install -g buntralino-cli
buntralino create
```
@tab Add to Neutralino.js project
```sh
# Run this in the root of your Neutralino.js project
bun install -g buntralino-cli
buntralino add
```
:::

::: info Are you getting `could not determine executable to run for package` errors?
There is [an unresolved issue with `bunx`](https://github.com/oven-sh/bun/issues/9841) at this moment, but usually just removing the folder created by `buntralino create` and running the command again fixes the problem. Magic 🤷
:::

## 2. Run the application

::: code-tabs#newornot
@tab New project
```sh
cd buntralino-app
bun run dev
```
@tab Add to Neutralino.js project
```sh
bun run dev
```
:::

## 3. Build the app
```sh
bun run build
```

That's it! Buntralino will build and package the app for distribution using `neutralino.config.json` Neutralino.js uses.

:::center
![](/CrossPlatformSampleApp.png)
:::