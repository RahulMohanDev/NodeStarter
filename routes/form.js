const express = require('express');
const path = require('path')

const router = express.Router(); 

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..',"views","form.html"))
})

router.post('/userDetails',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

router.post('/changeName',(req,res)=>{
    console.log('this is for change data',req.body);
    res.redirect('/');
})

module.exports=router;