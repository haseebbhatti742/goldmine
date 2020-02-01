const http = require('http');
const app1 = require("./app");
const app = app1.app

var options = {
    host: 'encrypted.google.com',
    port: 443,
    path: '/',
    method: 'GET'
};

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, function(){
    console.log("Server Running");
});