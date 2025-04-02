document.getElementById('play-button').addEventListener('click', () => {
    const username = document.getElementById("username").value;  // ✅ Исправлено (value)
    const version = document.getElementById("version").value;  

    window.electronAPI.onButtonClick(username, version);  // ✅ Передаем параметры
});
