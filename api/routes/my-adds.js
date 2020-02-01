const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('my-adds');
});

router.post('/',(req,res,next)=>{
    res.render('my-adds');
});


module.exports = router;