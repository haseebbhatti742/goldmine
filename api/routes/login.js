const express = require('express');
const router = express.Router();
let app = require("../../app");

router.get('/',(req,res,next)=>{
    res.render('login-form');
});

router.post('/',(req,res,next)=>{
    res.render('login-form');
});

router.post('/login',(req,res,next)=>{
    res.redirect("/home");
    // var username = req.body.username;
    // var pass = req.body.pass;

    // var query1 = "SELECT * from users where username='"+username+"' OR email='"+username+"' AND pass='"+pass+"'";
    // app.conn.query(query1, (err, result)=>{
    //     if(err) throw err;
    //     else if(result.length==0){
    //         res.status(200).json({message:"No User Found"});
    //     }
    //     else if(result[0].pass != pass){
    //         res.status(200).json({message:"Wrong Password"});
    //     }
    //     else{
    //         app.sess = req.session;
    //         app.sess.username = result[0].username;
    //         app.sess.pass = result[0].pass;
    //         res.redirect("/home");
    //     }
    // });
});


module.exports = router;