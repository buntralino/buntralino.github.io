---
home: true
title: Buntralino — make better, faster hybrid apps
shortTitle: Home
description: Buntralino is a hybrid app development framework that lets you use web technologies (HTML, CSS, JavaScript, TypeScript) to make desktop apps. Buntralino applications work by creating a Bun application that launches and manages Neutralino.js windows.
heroImage: /Buntralino.png
tagline: Make better, faster cross-platform desktop apps without the bloat of Chrome while still keeping the comfort of node.js development.
banner: /opengraph.png
cover: /opengraph.png

actions:
  - text: Get started
    link: /get-started.html
    type: primary

  - text: Bun API
    link: /bun-api.html
    type: secondary

  - text: Client API
    link: /client-api.html
    type: secondary

highlights:

- header: The perfect match
  description: Buntralino unites <a href="https://bun.sh/" target="_blank">Bun</a> and <a href="https://neutralino.js.org/" target="_blank">Neutralino.js</a> to make a simpler, lighter alternative to Electron and NW.js. Use Neutralino.js API at client and send harder tasks to Bun while keeping your development process easy.
  features:
    - title: Lighter builds
      details: Buntralino uses built-in OS' browser instead of Chrome or Chromium compared to Electron or NW.js.
      icon: feather-pointed
    - title: HTML5 GUI, for real this time
      details: Using a regular browser means no issues with <code>require</code>, duplicated APIs, or other incompatibilities.
      icon: code
    - title: Use Node.js packages and Bun API
      details: Add any node.js packages to use in your project, and utilize Bun APIs to outrun Node.js.
      icon: cubes
    - title: Work with multiple windows
      details: Spawn and manipulate multiple windows, exchange information with events, and run JS directly in windows from Bun if needed.
      icon: window-restore
    - title: Native tasks in browser context
      details: Call Neutralino.js API in a browser window to do quick filesystem tasks or read OS information.
      icon: desktop
    - title: Split contexts
      details: Run heavier tasks in Bun process and trigger them from browser with Buntralino's async client API without blocking the GUI.
      icon: clone
    - title: Cross-compile for production
      details: Simplify CI/CD with one pipeline to bake for Windows, Mac and Linux at once.
      icon: arrows-turn-right
    - title: Ready to rumble
      details: Default template supports TypeScript and automatically bundles all the code for production.
      icon: rocket

footer: MIT Licensed | Copyright © 2024-present Cosmo Myzrail Gorynych
---

## Simple Promise-based API
:::columns
!!!column
### Bun
```ts
import {create, registerMethod, evalJs} from 'buntralino';

/* Add a Bun method to UI */
registerMethod('sayHello', async (payload: {
  message: string
}) => {
  await Bun.sleep(1000);
  return `Bun says "${payload.message}"!`;
});

/* Create a window named "main" */
await create('/', {
  name: 'main'
});
/* Manipulate created windows */
evalJs('main', `console.log('👀');`);
```
!!!
!!!column
### UI
```ts
import * as buntralino from 'buntralino-client';

(async () => {
  /* Wait till Buntralino API is ready */
  await buntralino.ready;

  /* Run a Bun method and get its return value */
  const response = await buntralino.run('sayHello', {
    message: 'Hello, Buntralino!'
  });
  console.log(response);
})();
```
!!!
:::

:::center
![](/CrossPlatformSampleApp.png)
:::

##  How does it work?

Buntralino is a hybrid app development framework that lets you use web technologies (HTML, CSS, JavaScript, TypeScript) to make desktop apps. Buntralino applications work by creating a Bun application that launches and manages Neutralino.js windows. Neutralino.js windows can exchange information with Bun and each other in a client-server model through websockets, with you using a nice promise-based API. Bun is a faster alternative to Node.js or Deno, while Neutralino.js uses native OS' browser and augments it with native functions.

<a class="route-link auto-link vp-hero-action primary no-external-link-icon" href="/architecture" aria-label="See the Architecture">See the Architecture</a>