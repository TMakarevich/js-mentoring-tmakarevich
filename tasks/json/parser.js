/**
 * You need to write a parser, which takes the ./test.json file
 * and will create a new JSON file with the name parsed.json with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the ./test.json file
 * Please NOTE, that you should omit the .html extension
 * Please do the task in the scope of the file. Create a pull request a share it with your mentor.
 */

const fs = require('fs');
const path = require('path');

const jsonFile = require('./test.json');

let parsed = jsonFile.list.entries.map(element => {
    let newName = 'http://doc.epam.com/' + element.entry.name.replace('.html', '');
    return {
        docId: newName
    };
});
// console.log(parsed);
// console.log(JSON.stringify(parsed, null, '\t'));

const filePath = path.join(__dirname, 'parsed.json');
fs.writeFile(filePath, JSON.stringify(parsed, null, '\t'), err => {
    if (err) {
        throw err;
    }
    console.log('The file is created!');
});