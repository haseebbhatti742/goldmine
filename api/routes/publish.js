const express = require('express');
const router = express.Router();

//multer for image upload start
var multer = require('multer');
var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "assets/images/");
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({
    storage: Storage
}).array("productimage", 6);
//multer for image upload end

router.get('/',(req,res,next)=>{
    res.render('product-add');
});

router.post('/',(req,res,next)=>{
    res.render('product-add');
});

router.post("/add-product", (req, res, next)=>{
    upload(req, res, function(err) {
        if (err) throw err;
        return res.end("File uploaded sucessfully!.");
    });
});

module.exports = router;