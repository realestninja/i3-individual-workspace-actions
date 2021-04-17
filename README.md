# i3-individual-workspace-actions

This script checks which workspace is currently in use and will then take care of the requested action.

## Example usecase:

When I open my webbrowser on WS7, it will always take me to trello directly, because thats the workspace I usually use trello.

## Requirements:

* [nodejs](https://nodejs.org/en/download/package-manager/)

## Usage:

### Demo config:
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

### Corresponding lines in the i3config for the demo to work
```
bindsym $mod+F2 exec "node ~/path/to/i3-individual-workspace-actions/main.js open-browser-demo"
bindsym $mod+F3 exec "node ~/path/to/i3-individual-workspace-actions/main.js notification-demo"
```

When pressing mod+F2 it will now open the *w3schools* website in your browser. When on WS7, it will instead open the *unsplash* website in your browser.
When pressing mod+F3 it will send different notifications depending on which workspace is active.

Same for the notification demo. On WS1 and WS2, it will have customized notifications while a default notification will be sent on any other WS.

Pass the key that is used in the config file as argument.
