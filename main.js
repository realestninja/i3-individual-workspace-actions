const fs = require("fs");
const { exec } = require("child_process");

const hasProperty = (object, key) => (object ? hasOwnProperty.call(object, key) : false);

const readConfig = async () => {
  const currentFolder = process.argv[1].substr(0, process.argv[1].lastIndexOf("/"));
  return JSON.parse(fs.readFileSync(`${currentFolder}/config.json`));
};

const execWorkspaceSpecificAction = async (workspaceNumber) => {
  const config = await readConfig();
  const requestedAction = process.argv[2];

  if (hasProperty(config, requestedAction)) {
    const availableActions = config[requestedAction];
    exec(hasProperty(availableActions, workspaceNumber)
      ? availableActions[workspaceNumber]
      : availableActions.default);
  } else {
    exec("notify-send 'action not found'");
  }
};

const getFocusedWorkspace = (arrayOfWorkspaces) => {
  arrayOfWorkspaces.forEach((workspace) => {
    if (workspace.focused) execWorkspaceSpecificAction(workspace.num);
  });
};

exec("i3-msg -t get_workspaces", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  getFocusedWorkspace(Array.from(JSON.parse(stdout)));
});
