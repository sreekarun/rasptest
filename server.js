var http = require('http');
var sys = require('sys');
var exec = require('child_process').exec;
var message;

function fortuneCallback(error, stdout, stderr) { 
    message = stdout;       
}

var server = http.createServer(function(req, resp){
     //Get a new string from fortune
    exec("fortune", fortuneCallback);
    
    resp.writeHead(200, { "Content-Type": "text/plain"});
    resp.end( message + "\n");
});
server.listen(8080);