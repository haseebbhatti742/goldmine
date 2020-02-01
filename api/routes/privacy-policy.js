const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('privacy-policy');
});

router.post('/',(req,res,next)=>{
    res.render('privacy-policy');
});


module.exports = router;