const { Client } = require('minecraft-launcher-core');
const path = require('path');

async function minecraftLauncher(username, version) {
    const launcher = new Client();

    const options = {
        authorization: {// ✅ Подставляем имя по умолчанию
            uuid: "12345678-1234-5678-1234-567812345678", 
            access_token: "offline" 
        },
        root: path.join(__dirname, "minecraft"), 
        version: {
            number: version, 
            type: "release"
        },
        memory: {
            max: "4G",  
            min: "2G"  
        }
    };

    try {
        await launcher.launch(options);
        console.log("✅ Minecraft запущен в оффлайн-режиме!");
    } catch (err) {
        console.error("❌ Ошибка запуска:", err);
    }
}

module.exports = { minecraftLauncher };
