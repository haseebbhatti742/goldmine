const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('profile');
});

router.post('/',(req,res,next)=>{
    res.render('profile');
});


module.exports = router;