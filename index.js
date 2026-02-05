import http from "http";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname,"message.txt");

    fs.readFile(filePath,"utf8",(err, data)=>{
        if(err){
            res.writeHead(500,{"constent-Type":"text/plain"});
            res.end("Error reading file");

        }else{
            res.writeHead(200, {"constent-Type":"text/plain"});
            res.end(data);
        }
    });
});

server.listen(3000, ()=>{
    console.log("server is running on port 3000");
})