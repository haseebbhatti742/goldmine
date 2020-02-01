const express = require('express');
const router = express.Router();
const path = require("path");

//multer for image upload start
var multer = require('multer');
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "assets/images/profilepictures");
    },
    filename: function(req, file, callback) {
        callback(null, "dp1.jpg");
    }
});
var upload = multer({
    storage: Storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          //return cb(new Error('Only .jpg format allowed!'));
        }
    }
}).array("productimage", 1);
//multer for image upload end

router.post("/", (req, res, next)=>{
    upload(req, res, function(err) {
        if (err){
            res.render('profile', {'ppError':err.message});
        }
        res.redirect("/profile");
    });
});

module.exports = router;