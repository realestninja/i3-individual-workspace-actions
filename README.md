# i3-individual-workspace-actions

This script checks which workspace is active and takes care of the action.

## Example usage:

When adding `bindsym $mod+F2 exec "node ~/path/to/i3-individual-workspace-actions/main.js"` to the i3 config, it will call this script when using mod+F2.

Check this example and tweak it to your needs:
```
const execWsSpecificCommand = (wsNumber) => {
  switch (wsNumber) {
    case 1:
      console.log("Number 1 here");
      break;
    case 7:
      console.log("This is workspace 7!");
      break;
    default:
      console.log("This could be any workspace");
      break;
  }
};
```

It can also be modified to check the workspace name instead of it's number.

Currently it is hardcoded to launch a new chrome window but on WS7 it will open trello.

WIP, TODO: read args, then check config.json which command to execute.
