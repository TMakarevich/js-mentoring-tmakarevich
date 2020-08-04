/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */

const fs = require('fs');
const path = require('path');

const fetch = require('node-fetch');

async function myFunc() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await result.json();
    const res = data.filter(item => item.id < 20);
    // console.log(res);
    // console.log(JSON.stringify(res));
    const res1 = JSON.stringify(res);
    // console.log(res1);
    const filePath = path.join(__dirname, 'response.json');
    fs.appendFile(filePath, res1, err => {
        if (err) {
            throw err;
        }
    });
}
myFunc();