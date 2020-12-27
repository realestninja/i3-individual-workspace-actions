const { exec } = require("child_process");
const fs = require("fs");

const execWsSpecificAction = async (wsNumber) => {
  const arg = "loremipsum";
  const config = await readConfig();
  const possibleActions = config[arg];

  const action = hasProperty(possibleActions, wsNumber)
    ? possibleActions[wsNumber]
    : possibleActions["default"];

  exec(action);
};

const readConfig = async () => {
  return JSON.parse(fs.readFileSync("./config.json"));
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
