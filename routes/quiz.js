const express = require('express');
const router = express.Router();

router.get('/Quiz',(req,res)=>{
    res.render('Quiz/index.ejs')
})

module.exports = router;