const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    onButtonClick: (username, version) => ipcRenderer.send('button-clicked', username, version)  // ✅ Теперь передаем параметры
});
