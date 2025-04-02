document.getElementById('play-button').addEventListener('click', () => {
    const username = document.getElementById("username").value; 
    const version = document.getElementById("version").value;  

    window.electronAPI.onButtonClick(username, version);  
});
