const settingsBtn = document.getElementById("settings");
const settingsFrame = document.getElementById("settings-iframe");
const settingsIframe = settingsFrame.querySelector("iframe");


settingsBtn.addEventListener("click", () => {
    settingsFrame.style.display = "flex"; 
});

settingsIframe.addEventListener("load", () => {
    const exitBtn = settingsIframe.contentWindow.document.getElementById("exit");
    
    if (exitBtn) {
        exitBtn.addEventListener("click", () => {
            settingsFrame.style.display = "none";
        });
    }
});



const save = document.getElementById("save");

save.addEventListener('click', () =>{
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var ram = document.getElementById("ram").value;

    window.electronAPI.userSet(width, height, ram);  
});
