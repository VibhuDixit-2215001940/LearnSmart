const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/chatBot',(req,res)=>{
    res.render('ChatBot/index.ejs')
})

module.exports = router;