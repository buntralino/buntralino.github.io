---
icon: desktop
---

# Client-side API

Windows in Buntralino can use the **regular browser APIs, Neutralino native APIs, and Buntralino methods**. Neutralino.js API allows running native functions right in the browser code, while Buntralino methods allow you to offload heavy tasks to the main Bun process.

For Neutralino.js methods,

* See the [API overview](https://neutralino.js.org/docs/api/overview) and read documentation of its namespaces.
* Note that most namespaces are disabled by default (for security reasons), and namespaces and specific functions can be allowed and blacklisted by setting [`nativeBlockList`](https://neutralino.js.org/docs/configuration/neutralino.config.json#nativeblocklist-string) and [`nativeAllowList`](https://neutralino.js.org/docs/configuration/neutralino.config.json#nativeallowlist-string) in `neutralino.config.json` placed in the root of your project.
* You may also make use of Neutralino's [global variables](https://neutralino.js.org/docs/api/global-variables) that show information about system and paths.

For Buntralino methods, make sure your application imports `buntralino-client` application at least once, or it will not connect to the main Bun process.
The `buntralino-client` package also exports several methods to communicate with Bun instance. You can install `buntralino-client` package into the existing project with `bun install --save buntralino-client`.

## Usage and methods

You can import the buntralino client library as an ESM module:

```typescript
import * as buntralino from 'buntralino-client'; // Automatically connects to Bun!
```

You can run Buntralino methods from Neutralino windows once they connect to the main Bun process. `buntralino-client` exports a Promise property `ready`. (It's a plain Promise, not a function that returns one!)

```typescript
// Wait till the connection to Bun is up
await buntralino.ready;
```

### `buntralino.run(method, payload)`

The `run` method sends a request to the main Bun process to execute a method you have registered with [buntralino.registerMethod]() and [buntralino.registerMethodMap]() methods there. The name argument matches the name of the registered method. You can also provide a payload for arguments and options for the function call — it can be any JSON-serializable value (constant values, arrays, objects).

```typescript
// Call a method added on Bun side with buntralino.registerMethod
const updates = await buntralino.run('loadUpdates');
```
```typescript
// Call a method with options (must be a JSON-serializable object)
await buntralino.run('downloadFile', {
    src: 'https://secret.bunnies.io/builds/windows.exe',
    dest: 'dependencies/secretBunnies.exe'
});
```

### `buntralino.broadcast(eventName, eventDetails)`

Sends an event to all Neutralino.js windows. This event can then be received with [`Neutralino.events.on` listeners](https://neutralino.js.org/docs/api/events#eventsoneventname-handler).

```typescript
// Send an event to all Neutralino instances
buntralino.broadcast('loginSuccessful', {
    username: 'Doofus3000'
});

// Listen to events through Neutralino API:
Neutralino.events.on('loginSuccessful', e => {
    const {username} = e.detail;
    console.log(`Logged in as ${username}!`);
});
```

### `buntralin.sendEvent(windowName, eventName, eventDetails)`

Sends an event to a specific named Neutralino.js windows. (Names are assigned when you create these windows with [buntralino.create]().) This event can then be received with [`Neutralino.events.on` listeners](https://neutralino.js.org/docs/api/events#eventsoneventname-handler).

```typescript
// Send an event to a specific Neutralino window
buntralino.sendEvent('main', 'loginSuccessful', {
    username: 'Doofus3000'
});

// Listen to events through Neutralino API:
Neutralino.events.on('loginSuccessful', e => {
    const {username} = e.detail;
    console.log(`Logged in as ${username}!`);
});
```

### `buntralino.shutdown()`

Sends a signal to the main Bun process to completely exit Buntralino application.

```typescript
buntralino.shutdown();
```

### `buntralino.disableBunCheck()`

By default, when an application is packaged, Buntralino client will close a Neutralino window if it was not opened with Buntralino, and open Buntralino executable. This is to remedy cases where users get confused on what executable to launch, and usually is harmless as Buntralino windows should be created through Bun API with `buntralino.create`, and third-party windows don't need Neutralino.js API.

In case you do need to use `Neutralino.window.create`, you will need to call `buntralino.disableBunCheck()` right after you import `buntralino-client`. Otherwise the Neutralino window will nuke itself and will try to open its parent app.

Example:

```typescript
import * as buntralino from 'buntralino-client';
buntralino.disableBunCheck();

// Proceed as usual
```