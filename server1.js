const http = require("http")
const fs = require('fs').promises;

const server = http.createServer();

async function readFileExample(){
    try {
        const data = await fs.readFile('myFile.txt','utf8')
        console.log('File Content',data)
    } catch (error) {
        console.error(error)
    }
}

readFileExample();
 // or will util.promisify (Node.js 8.0.0+)
const {promisify} = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function  readWithPromisify(){
    try {
        const data = await readFileAsync('myfile.txt','utf8');
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

readWithPromisify();