const fs = require('fs');
const path = require('path');
const beautify = require('json-beautify');

const folderPath = path.join(__dirname,'json_folder'); //folder directory
const files = fs.readdirSync(folderPath);

let mergedData = [];

files.forEach((file) => {
    if (path.extname(file) === '.json') {
        const filePath = path.join(folderPath, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        mergedData = mergedData.concat(data);
    }
});

const newJsonFile = path.join(__dirname,'/output/_metadata.json');
fs.writeFileSync(newJsonFile, beautify(mergedData, null, 2, 100));
console.log("Merged data has been written to " + newJsonFile);