const fs = require('fs');

function writeDataToFile(filename, width, height, ram) {
  const data = {
    width: width,
    height: height,
    ram: ram,
  };

  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filename, jsonData, 'utf8'); 
  console.log(`Данные успешно записаны в ${filename}`);
}

module.exports = { writeDataToFile };
