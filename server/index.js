const http = require("http")
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("this is server")
    }
    else if(req.url==='/download'){
        res.end("This is download")
    }
    
})

server.listen(3000,()=>{
    console.log("Server Listening")
})