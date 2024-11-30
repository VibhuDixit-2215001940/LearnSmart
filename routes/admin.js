const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/Adminlogin', (req, res) => {
    res.render('Admin/login');
});

router.post('/Adminlogin',async (req, res) => {
    const { Username, Password } = req.body;
    if (Username === 'admin' && Password === 'admin') {
        const userCount = await User.countDocuments();
        return res.render('Admin/index',{userCount});
    } else {
        res.redirect('/Err')
    }
});

router.get('/admin', (req, res) => {
    res.render('Admin/index.ejs');
});

module.exports = router;