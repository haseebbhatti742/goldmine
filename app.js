//libraries
const express = require('express');
const app1 = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

//settings
app1.use(cookieParser('secret'));
app1.use(flash());
app1.use(bodyParser.urlencoded({
    extended:true
}));
app1.use(bodyParser.json());
app1.use(express.static('assets')); 

app1.set('views','./views');
app1.set('view engine', 'jade');

//session management
app1.use(session({
    saveUninitialized: false,
    resave: false,
    secret: 'ssshhhhh',
    cookie: { maxAge: 60000 }
}));

//db connection
var conn = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'goldmine2'
});

var  sess = false;

//deifining routes
const indexRoute = require("./api/routes/index");
const loginRoute = require("./api/routes/login");
const registerRoute = require("./api/routes/signup");
const facebookLoginRoute = require("./api/routes/facebook");
const contactFormRoute = require("./api/routes/contact-form");
const homeRoute = require("./api/routes/home");
const profileRoute = require("./api/routes/profile");
const publishRoute = require("./api/routes/publish");
const changeppRoute = require("./api/routes/changepp");
const productDetailRoute = require("./api/routes/product-detail");
const productDetailRoute1 = require("./api/routes/product-detail1");
const myAddsRoute = require("./api/routes/my-adds");
const inboxRoute = require("./api/routes/inbox");
const policyRoute = require("./api/routes/privacy-policy");
const termsRoute = require("./api/routes/terms-conditions");

//using routes
app1.use("/", indexRoute);
app1.use("/login-form", loginRoute);
app1.use("/signup-form", registerRoute);
app1.use("/auth/facebook", facebookLoginRoute);
app1.use("/contact-form", contactFormRoute);
app1.use("/home", homeRoute);
app1.use("/profile", profileRoute);
app1.use("/publish", publishRoute);
app1.use("/changepp", changeppRoute);
app1.use("/product-detail", productDetailRoute);
app1.use("/product-detail1", productDetailRoute1);
app1.use("/my-adds", myAddsRoute);
app1.use("/inbox", inboxRoute);
app1.use("/privacy-policy", policyRoute);
app1.use("/terms-conditions", termsRoute)

app1.use('/logout',(req, res, next)=>{
    res.redirect('/');
    // req.session.destroy((err)=>{
    //     res.redirect('/');
    // });
});

module.exports.app = app1;
module.exports.conn = conn;
module.exports.sess = sess;