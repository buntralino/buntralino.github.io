---
icon: carrot
---

# Bun API

This page documents the API you use on Bun side to create new Neutralino windows and manipulate them.

## Window Management

### create(url: string, options?: WindowOptions): Promise&lt;string&gt;
Creates a new Neutralino window.

- `url`: The URL to load in the window
- `options`: Window configuration options.
- Returns: Promise resolving to the name of the created window.

Example usage:

```typescript
import * as buntralino from 'buntralino';

await buntralino.create('/', {
    name: 'main',
    title: 'My App',
    width: 800,
    height: 600,
    center: true,
    resizable: true
});
```

Options are:

```typescript
interface WindowOptions {
    // Custom Buntralino option
    name?: string;  // Custom window identifier to use with other methods
                    // If not set, a random name is generated.

    // Standard Neutralino.js WindowOptions (from @neutralinojs/lib)
    title?: string;               // Window title
    icon?: string;                // Path to window's icon
                                  // (PNG file, relative to Neutralino.js resources,
                                  // which is `app` in the default Buntralino template)
    enableInspector?: boolean;    // Enable dev tools
                                  // (defaults to `true` when developing and `false` in production)
    alwaysOnTop?: boolean;        // Whether the window always stays on top of other windows
    borderless?: boolean;         // Create a borderless window (no titlebar or default OS frame)
    exitProcessOnClose?: boolean; // Exit the Neutralino process when window closes
    fullScreen?: boolean;         // Whether to start in fullscreen
    hidden?: boolean;             // Start hidden
    maximizable?: boolean;        // Can be maximized
    maximize?: boolean;           // Start maximized
    processArgs?: string;         // Additional process arguments
    resizable?: boolean;          // Whether the window can be resized
    useSavedState?: boolean;      // Whether to save and load previous position of this window.
    x?: number;                   // Initial x position
    y?: number;                   // Initial y position
    width?: number;               // Initial width
    height?: number;              // Initial height
    minWidth?: number;            // Minimum allowed window width
    minHeight?: number;           // Minimum allowed window height
    maxWidth?: number;            // Maximum allowed window width
    maxHeight?: number;           // Maximum allowed window height
}
```

### show(target: string): Promise&lt;void&gt;
Makes the window visible.

### hide(target: string): Promise&lt;void&gt;
Hides the window.

### exit(target: string): Promise&lt;void&gt;
Closes the specified window. Alias: `close(target: string)`

### setAlwaysOnTop(target: string, onTop: boolean): Promise&lt;void&gt;
Sets whether the window should stay on top of other windows.

### getSize(target: string): Promise&lt;WindowSizeOptions&gt;
Returns the current window size.

### setSize(target: string, options: WindowSizeOptions): Promise&lt;void&gt;
Sets the window size.

- `options`: Partial WindowSizeOptions object; merges with the current size.

`WindowSizeOptions` is:

```typescript
interface WindowSizeOptions {
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    resizable?: boolean;
}
```

### getPosition(target: string): Promise&lt;WindowPosOptions&gt;
Returns the current window position.

`WindowPosOptions` is:

```typescript
interface WindowPosOptions {
    x: number;
    y: number;
}
```

### move(target: string, x: number, y: number): Promise&lt;void&gt;
Moves the window to specified coordinates. Alias: `setPosition(target: string, x: number, y: number)`

### center(target: string): Promise&lt;void&gt;
Centers the window on screen.

### focus(target: string): Promise&lt;void&gt;
Brings the window to front and gives it focus.

### getTitle(target: string): Promise&lt;string&gt;
Gets the window title.

### setTitle(target: string, title: string): Promise&lt;void&gt;
Sets the window title.

### navigate(target: string, url: string): Promise&lt;void&gt;
Navigates the window to a new URL.

### reload(target: string): Promise&lt;void&gt;
Reloads the current window.

### evalJs(target: string, js: string): Promise&lt;void&gt;
Evaluates JavaScript code in the window context.

## Method Registration

For simpler, promisified calls of native functions and complex tasks, you can register methods with `registerMethod` and/or `registerMethodMap` calls. The functions registered here will then be callable in browser contexts with [`buntralino.run`](/client-api.html#buntralino-run-method-payload) method.

### registerMethod(name: string, method: methodCall): void
Registers a single method that can be called from the client side.

```typescript
import * as buntralino from 'buntralino';

// Example using registerMethod for individual method registration
buntralino.registerMethod('sayHello', async (payload: { name: string }) => {
    await Bun.sleep(500); // simulate some async work
    return `Hello, ${payload.name}!`;
});
```

### registerMethodMap(methods: Record&lt;string, methodCall&gt; | Map&lt;string, methodCall&gt;): void
Registers multiple methods at once using either an object or Map.

```typescript
import * as buntralino from 'buntralino';

// Example using registerMethodMap for registering multiple methods at once
// Using an object
const methodMap = {
    add: (payload: { a: number, b: number }) => {
        return payload.a + payload.b;
    },
    getCurrentTime: () => {
        return new Date().toISOString();
    },
    readFile: async (payload: { path: string }) => {
        const file = Bun.file(payload.path);
        return await file.text();
    }
};
buntralino.registerMethodMap(methodMap);

// Alternative: using a Map
const methodMapUsingMap = new Map([
    ['multiply', (payload: { a: number, b: number }) => payload.a * payload.b],
    ['getSystemInfo', () => ({
        platform: process.platform,
        arch: process.arch
    })]
]);
buntralino.registerMethodMap(methodMapUsingMap);
```

## Connection Management

### isConnectionOpen(name: string): boolean
Checks if a connection to a named window is currently open. Can be used to check whether a window is still open, or whether the connection to it is ready.

## Events

### `events` property

The package exports an EventEmitter instance as `events` that emits:

- 'open': When a window is opened (payload: window name)
- 'close': When a window is closed (payload: window name)

Example:

```typescript
import * as buntralino from 'buntralino';

// Create main window
await buntralino.create('/', {
    name: 'main',
    width: 800,
    height: 600
});

// Listen for window open events
buntralino.events.on('open', (windowName: string) => {
    console.log(`Window "${windowName}" has been opened`);
});

// Listen for window close events
buntralino.events.on('close', (windowName: string) => {
    console.log(`Window "${windowName}" has been closed`);

    // Exit the application when main window is closed
    if (windowName === 'main') {
        process.exit();
    }
});

// Create another window later
await buntralino.create('/secondary.html', {
    name: 'secondary',
    width: 400,
    height: 300
});
```

### sendEvent(target: string, event: string, payload?: unknown): void

Sends an event to a specific named Neutralino window. This method allows you to communicate with a specific window instance by sending an event along with optional data.

Parameters:
- **target**: `string`
  - The name of the window to which the event should be sent.
- **event**: `string`
  - The name of the event to be sent.
- **payload**: `unknown` (optional)
  - An optional data object that will be sent along with the event. This can be any JSON-serializable value.

Example:
```typescript
import * as buntralino from 'buntralino';

// Send an event to a specific Neutralino window
buntralino.sendEvent('main', 'loginSuccessful', {
    username: 'Doofus3000'
});
```
Client side code:
```typescript
// Listen to events through Neutralino API:
Neutralino.events.on('loginSuccessful', e => {
    const {username} = e.detail;
    console.log(`Logged in as ${username}!`);
});
```

### broadcast(event: string, payload?: unknown): void

Sends an event to all currently connected Neutralino windows. This method is useful for broadcasting messages or notifications to multiple windows at once.

Parameters:
- **event**: `string`
  - The name of the event to be broadcasted.
- **payload**: `unknown` (optional)
  - An optional data object that will be sent along with the event. This can be any JSON-serializable value.

Example:
```typescript
import * as buntralino from 'buntralino';

// Broadcast an event to all Neutralino windows
await buntralino.broadcast('newUpdate', {
    version: '1.4.2'
});
```
Client side code:
```typescript
// Listen to events through Neutralino API:
Neutralino.events.on('newUpdate', e => {
    const {version} = e.detail;
    console.log(`New version ${version} has been released!`);
});
```
