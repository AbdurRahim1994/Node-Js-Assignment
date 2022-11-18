var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('home.html', (err, data) => {
            err != null ? console.log("File read failed") : res.write(data);
            res.end();
        });
    }
    else if(req.url=='/contact'){
        fs.readFile('contact.html', (err, data)=>{
            err!=null?res.write("File read failed"):res.write(data);
            res.end();
        })
    }
    else if(req.url=='/about'){
        fs.readFile('about.html', (err, data)=>{
            err!=null?res.write("File read failed"):res.write(data);
            res.end();
        })
    }
});

server.listen(4040);
console.log("Server Running Successful");