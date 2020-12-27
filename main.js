const { exec } = require("child_process");
const fs = require("fs");

const execWsSpecificAction = async (wsNumber) => {
  const config = await readConfig();
  const requestedAction = process.argv[2];

  if (hasProperty(config, requestedAction)) {
    const availableActions = config[requestedAction];

    const action = hasProperty(availableActions, wsNumber)
      ? availableActions[wsNumber]
      : availableActions["default"];
    exec(action);
  } else {
    exec("notify-send 'action not found'");
  }
};

const readConfig = async () => {
  const currentFolder = process.argv[1].substr(0, process.argv[1].lastIndexOf("\/"));
  return JSON.parse(fs.readFileSync(`${currentFolder}/config.json`));
};

const getFocusedWorkspace = (arrayOfWorkspaces) => {
  arrayOfWorkspaces.forEach((ws) => {
    if (ws.focused) execWsSpecificAction(ws.num);
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

const hasProperty = (object, key) => {
  return object ? hasOwnProperty.call(object, key) : false;
};
