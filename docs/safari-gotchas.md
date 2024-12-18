---
icon: poop
---

# Safari considerations

Buntralino uses an OS' built-in browser to stay relatively lightweight — which is good! But for Mac users, Safari browser is known to lag behind the modern standards, and its version range depends on the version of macOS itself — contrary to Windows where Edge gets continuously updated regularly.

You define the minimum required OS version for your app to run on, but Buntralino itself supports macOS v11+. If we take the newest possible Safari version 16.6.1 on Big Sur ([see Wikipedia](https://en.wikipedia.org/wiki/Safari_(web_browser)#Version_compatibility)), and [look it up on caniuse.com](https://caniuse.com/?compare=safari+16.6&compareCats=all), we will see that this version is missing some features that may be crucial to your application:

* DOM Auxclick event;
* DOM Touch events;
* AV1 video format;
* OGG/Theora video format;
* CSS counter styles;
* CSS `overflow: overlay`;
* CSS `text-justify` property;
* CSS `text-wrap: balance`;
* CSS `touch-action` property;
* CSS container style queries;
* CSS @scope rules;
* CSS3 `attr()` function support for all properties;
* HTML Media Capture;
* Web MIDI API;
* Object.observe data binding;
* Custom protocol handling;
* Web Bluetooth;
* Web Serial API;
* WebGPU;
* WebHID API;
* Web NFC;
* WebTransport;
* WebUSB;
* WebVR API;
* WebXR Device API.

There are also some features that are not needed in a Buntralino project, but might be used by your dependencies:

* Filesystem & FileWriter API;
* File System Access API.

Not using any of these features? Good! Your application is able to run anywhere without issues.

Older Safari versions also don't support many modern JS features, but, if you're using the default template, its ESBuild configuration already transforms all the code to support Safari v16.6.1.