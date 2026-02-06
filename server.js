const http = require("http")
const fs =  require("fs")

const server= http.createServer((req,res)=>{

    if(req.url === '/'){
        fs.readFile('index.html','utf8',(err,htmlContent)=>{
            if(err){
                res.statusCode = 500;
                res.end('InternalServer Error');
                return;
            }
            res.setHeader('Content-Type','Text/html');
            res.end(htmlContent);
        });
    }
    else if(req.url === '/style.css'){
        fs.readFile('style.css','utf8',(err, cssContent)=>{
            if(err){
                res.statusCode = 500;
                res.end('InternalServer Error ');
                return;
            }
            res.setHeader('Content-Type','Text/css');
            res.end(cssContent);
        })
    }
    else{
        res.statusCode = 400;
        res.end('Not Found');
    }
});


const port = 3000;
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
});