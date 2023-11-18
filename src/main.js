const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const isMac = process.platform === "darwin";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 865,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    fullscreen: true,
  });

  let child = new BrowserWindow({
    parent: mainWindow,
    width: 760,
    height: 650,
    show: false,
    modal: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  child.loadFile(path.join(__dirname, "child.html"));
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  ipcMain.on("closeModal", (event, data) => {
    if (child.isEnabled()) {
      child.hide();
    } else {
      child.show();
    }
  });

  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "score",
          click: () => {
            child.show();
            child.reload();
          },
        },
        {
          type: "separator", // 구분선 UI
        },
        isMac ? { role: "close" } : { role: "quit" },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "전체화면",
          accelerator: "Ctrl+F",
          role: "togglefullscreen",
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  //child.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
