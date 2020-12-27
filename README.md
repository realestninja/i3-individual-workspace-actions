# i3-individual-workspace-actions

This script checks which workspace is active and takes care of the requested action.

## Requirements:

* [nodejs](https://nodejs.org/en/download/package-manager/)

## Usage:

First we rename the provided `config.json.template` into `config.json`.
The example content of config.json looks like this:
```
{
  "loremipsum": {
    "7": "xdg-open 'https://unsplash.com/'",
    "default": "xdg-open 'https://www.w3schools.com/'"
  }
}
```

In this example we add the following line to our i3 config (adjust the path):
```
bindsym $mod+F2 exec "node ~/path/to/i3-individual-workspace-actions/main.js" loremipsum
```

The end of that line is the argument that we pass. In this case it is `loremipsum` which will be the key that will be used when looking for actions in the config file.

When pressing mod+F2 it will now open the *w3schools* website in your browser as default. When on WS7, it will instead open *unsplash* in your browser.

## Example config
```
{
  "chrome": {
    "7": "google-chrome-stable --new-window trello.com",
    "default": "google-chrome-stable"
  },
  "explorer": {
    "1": "nautilus --no-desktop",
    "2": "thunar",
    "default": "kitty ranger"
  }
}
```

The corresponding i3 config would look like this:
```
bindsym $mod+F2 exec "node ~/path/to/i3-individual-workspace-actions/main.js" chrome
bindsym $mod+F3 exec "node ~/path/to/i3-individual-workspace-actions/main.js" explorer
```
