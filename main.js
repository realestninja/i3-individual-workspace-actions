const { exec } = require("child_process");

const execWsSpecificCommand = (wsNumber) => {
  switch (wsNumber) {
    case 7:
      exec("google-chrome-stable --new-window trello.com");
      break;
    default:
      exec("google-chrome-stable");
      break;
  }
};

const getFocusedWorkspace = (arrayOfWorkspaces) => {
  arrayOfWorkspaces.forEach((ws) => {
    if (ws.focused) execWsSpecificCommand(ws.num);
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
