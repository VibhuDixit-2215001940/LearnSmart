const express = require('express');
const router = express.Router();

router.get('/course',(req,res)=>{
    res.render('Courses/computerScience.ejs')
})

module.exports = router;