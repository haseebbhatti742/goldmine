const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('contact-form');
});

router.post('/',(req,res,next)=>{
    res.render('contact-form');
});


module.exports = router;