const express = require('express');
const router = express.Router();

router.get('/course',(req,res)=>{
    res.render('Courses/computerScience.ejs')
})
router.get('/jee',(req,res)=>{
    res.render('Courses/jee.ejs')
})
module.exports = router;