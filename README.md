# i3-individual-workspace-actions

This script checks which workspace is active and takes care of the requested action.

## Requirements:

* [nodejs](https://nodejs.org/en/download/package-manager/)

## Usage:
Demo config:
```
{
  "open-browser-demo": {
    "7": "xdg-open 'https://unsplash.com/'",
    "default": "xdg-open 'https://www.w3schools.com/'"
  },
  "notification-demo": {
    "1": "notify-send 'this is workspace 1'",
    "2": "notify-send 'this is workspace 2'",
    "default": "notify-send 'hello world'"
  }
}
```

The corresponding lines in the i3config would look like this (adjust the path):
```
bindsym $mod+F2 exec "node ~/path/to/i3-individual-workspace-actions/main.js open-browser-demo"
bindsym $mod+F3 exec "node ~/path/to/i3-individual-workspace-actions/main.js notification-demo"
```

When pressing mod+F2 it will now open the *w3schools* website in your browser. When on WS7, it will instead open the *unsplash* website in your browser.
