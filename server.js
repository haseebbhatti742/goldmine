const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app1 = require("./app");
const session = require('express-session');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = app1.app

var https = require('https');
var fs = require('fs');

var options = {
    host: 'encrypted.google.com',
    port: 443,
    path: '/',
    method: 'GET'
};

const port = process.env.PORT || 8080;
const server = http.createServer(app);

app.use(express.static('assets')); 
app.set('views','./views');
app.set('view engine', 'jade');

server.listen(port, function(){
    console.log("Server Running");
});