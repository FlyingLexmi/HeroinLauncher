const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { minecraftLauncher } = require("./src/module/minecraftLauncher");

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'src', 'preloader.js')
        }
    });

    win.loadFile(path.join(__dirname, 'src', 'render', 'index.html'))
        .catch(err => console.error("Ошибка загрузки HTML:", err));
}

app.whenReady()
    .then(createWindow)
    .catch(err => console.error("Ошибка при инициализации приложения:", err));

ipcMain.on('button-clicked', (event, username, version) => {  // ✅ Теперь принимаем username и version
    console.log(`Запуск Minecraft с ником ${username} и версией ${version}`);
    minecraftLauncher(username, version);  // ✅ Передаем параметры в лаунчер
});
