---
shortTitle: Linux troubleshooting
icon: rectangle-xmark
---

# Troubleshooting apps not running Linux

:::note
This page automatically opens when a Buntralino application fails to start a GUI process in time. Buntralino is a framework for building different cross-platform apps.

***If you're the developer*** of the app launched, you should include these instructions in your troubleshooting and installation guides.

***If you're a user*** of the app that opened this page, you can follow this guide to fix the problem on your machine but contact the developer of the app if the issue persists. Please don't bother Buntralino developers about apps not built by Buntralino developers (:
:::

Buntralino uses Neutralino.js, and Neutralino.js requires `libwebkit2gtk` v4.0 or v4.1 installed in the system to create GUI windows. `libwebkit2gtk` is a library that provides a WebKit-based rendering engine for GTK applications, or, simply put, allows app developers to display webpage content in their apps. If nothing appears when you launch an app built on Buntralino, this is probably because `libwebkit2gtk` is missing in your system.

Here's a documentation page on how to install `libwebkit2gtk` on various popular Linux distributions if it is missing:

## Ubuntu and Debian

For Ubuntu and Debian, you can install `libwebkit2gtk` using the following commands:

```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-37
```

## Fedora

For Fedora users, you can install `libwebkit2gtk` with the following command:

```bash
sudo dnf install webkit2gtk3
```

## Arch Linux

On Arch Linux, you can install `libwebkit2gtk` using the following command:

```bash
sudo pacman -S webkit2gtk
```

## openSUSE

For openSUSE, you can install `libwebkit2gtk` with the following command:

```bash
sudo zypper install libwebkit2gtk-4_0-37
```

---

:::note Are we missing something?
If a solution for the operating system you use is missing on this page or if the solution was incomplete/incorrect, you can contribute to this page with the "Edit this page" link below ⬇️
:::