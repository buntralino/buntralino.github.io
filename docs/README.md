---
home: true
title: Home
heroImage: /Buntralino.png
tagline: Make better, faster cross-platform desktop apps without the bloat of Chrome while still keeping the comfort of node.js development.
subtagline: Buntralino unites Bun and Neutralino.js to make a simpler, lighter alternative to Electron and NW.js. Use Neutralino.js API at client and send harder tasks to Bun while keeping your development process easy.

# actions:
#   - text: Get Started
#     link: /getting-started.html
#     type: primary
#
#   - text: Introduction
#     link: https://vuejs.press/guide/introduction.html
#     type: secondary

footer: MIT Licensed | Copyright © 2024-present Cosmo Myzrail Gorynych
---

## How does it work?
Buntralino is a hybrid app development framework that lets you use web technologies (HTML, CSS, JavaScript, TypeScript) to make desktop apps. Buntralino applications work by creating a Bun application that launches and manages Neutralino.js windows. Neutralino.js windows can exchange information with Bun and each other in a client-server model through websockets, with you using a nice promise-based API. Bun is a faster alternative to Node.js or Deno, while Neutralino.js uses native OS' browser and augments it with native functions.

## Get started

### Make a new Buntralino project
```sh
bun install -g buntralino-cli
buntralino create
```
### Or, turn the existing Neutralino.js app into a Buntralino project
```sh
bun install -g buntralino-cli
buntralino add
```
### Run the application
```sh
buntralino run
```
### Build the app
```sh
buntralino build
```
That's it! Buntralino will manage building and packaging and uses `neutralino.config.json` Neutralino.js uses.