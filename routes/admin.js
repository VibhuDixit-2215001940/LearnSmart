const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/admin',(req,res)=>{
    res.render('Admin/index.ejs')
})

module.exports = router;