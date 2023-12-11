import { app, BrowserWindow } from "electron";
import { join } from "path";

const url = process.env.VITE_DEV_SERVER_URL;

const createdWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.webContents.openDevTools();
  if (process.env.NODE_ENV !== "development") {
    win.loadFile(join(__dirname, "../dist/index.html"));
  } else {
    win.loadURL(url as string);
  }
};

app.whenReady().then(() => {
  createdWindow();
});
