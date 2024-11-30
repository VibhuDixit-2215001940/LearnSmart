const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Course = require('../models/Course');

router.get('/Adminlogin', (req, res) => {
    res.render('Admin/login');
});

router.post('/Adminlogin',async (req, res) => {
    const { Username, Password } = req.body;
    if (Username === 'admin' && Password === 'admin') {
        const userCount = await User.countDocuments();
        const course = await Course.find();
        return res.render('Admin/index',{userCount,course});
    } else {
        res.redirect('/Err')
    }
});

router.get('/admin',(req, res) => {
        res.render('Admin/index.ejs');
});
router.get('/video',(req, res) => {
    res.render('Admin/video.ejs');
});
router.post('/add-course', async (req, res) => {
    try {
        const { courseName, courseLink, quizName, quizLink } = req.body;
        const newCourse = new Course({
            name: courseName,
            link: courseLink,
            quiz: {
                name: quizName,
                link: quizLink
            }
        });
        await newCourse.save();
        res.redirect('/admin')
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error adding course' });
    }
});
module.exports = router;