// routes/login.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.session.userId) {
        res.locals.userName = req.session.userName; 
        res.locals.userImage = req.session.userImage; 
        return next();
    }
    res.redirect('/login');
}
router.get('/login', (req, res) => {
    res.render('Login/index');
});
router.post('/login', async (req, res) => {
    const { username, userpass } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) {
        return res.render('Login/index', { error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(userpass, user.password);
    if (!isMatch) {
        return res.render('Login/index', { error: 'Incorrect password' });
    }
    user.lastLogin = new Date(); 
    await user.save(); 
    req.session.userId = user._id;
    req.session.userName = user.fname; 
    req.session.userImage = user.image;
    res.redirect('/Student');
});
router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.render('Login/index', { error: "Passwords do not match" });
    }
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        return res.render('Login/index', { error: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        email: email,
        password: hashedPassword,
    });
    await newUser.save();
    res.redirect('/login');
});
router.get('/Student', ensureAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.session.userId); // Fetch user from DB
        if (user) {
            res.render('Student/index.ejs', { user });
        } else {
            res.redirect('/login'); // Redirect if user not found
        }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;