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
// console.log(jsonFile.list.entries);
const mas = jsonFile.list.entries;
// console.log(mas);
let parsed = [];
for (let i = 0; i < mas.length; i++) {
    const str = mas[i].entry.name;
    const str1 = str.slice(0, -5);
    const str2 = '{"docId": "http://doc.epam.com/' + str1 + '"}';
    parsed.push(str2);
}
// console.log(parsed);
// console.log(parsed.length);
let parsedStr = parsed.join();
// console.log(parsedStr);
let updParsedStr = '[' + parsedStr + ']';
// console.log(updParsedStr);

const filePath = path.join(__dirname, 'parsed.json');
fs.writeFile(filePath, updParsedStr, err => {
    if (err) {
        throw err;
    }
    console.log('The file is created!');
}); // creates a file