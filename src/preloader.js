const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    onButtonClick: (username, version) => ipcRenderer.send('button-clicked', username, version),
    userSet: (width, height, ram) => ipcRenderer.send('userSave', width, height, ram) 
});
