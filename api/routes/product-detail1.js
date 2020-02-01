const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('product-detail1');
});

router.post('/',(req,res,next)=>{
    res.render('product-detail1');
});


module.exports = router;