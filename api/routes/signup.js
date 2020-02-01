const express = require('express');
const router = express.Router();
let app = require("../../app");

router.get('/',(req,res,next)=>{
    res.render('register-form');
});

router.post('/',(req,res,next)=>{
    res.render('register-form');
});

router.post("/signup", (req, res, next)=>{
    res.redirect("/home");
    // var fullname = req.body.fullname;
    // var username = req.body.username;
    // var email = req.body.email;
    // var pass = req.body.pass;
    // var repeatpass = req.body.repeatpass;
    
    // var query1 = "SELECT * from users where username = '"+username+"'";
    // app.conn.query(query1, (err, result1)=>{
    //     if(err) throw err;
    //     else if(result1.length>0){
    //         res.render('register-form', {'usernameError':'Username already taken'});
    //     }
    //     else{
    //         var query2 = "INSERT INTO users(fullname,username,email,pass) values('"+fullname+"','"+username+"','"+email+"','"+pass+"')";
    //         app.conn.query(query2,(err,result)=>{
    //             if(err) throw err;
    //             else{ 
    //                 console.log("registered");
    //             }
    //         });
    //     }
    // });
});

router.get("/:username", (req, res, next)=>{
    var username = req.params.username;
    console.log(username);

    var query1 = "SELECT * from users where username='"+username+"'";
    app.conn.query(query1, (err, result)=>{
        if(err) throw err;
        else if(result.length>0){
            console.log(result);
            res.status(200).json({userdata:result});
            // res.setHeader('Content-Type', 'application/json');
            // res.send(JSON.stringify({userdata:result}));
        }
        else{
            console.log("Sorry");
            res.send(JSON.stringify({message:"Sorry"}));
        }
    });

});

module.exports = router;