const express = require('express')
const app = express()
const path = require('path');
const ejsMate = require('ejs-mate');
const loginRoutes = require('./routes/login');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(loginRoutes);

mongoose.connect('mongodb://localhost:27017/learnSmart', {})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res)=>{
    res.render('Home/index.ejs')
})
app.get('*', (req, res) => {
    res.render('404/index');
});
app.get('/Err', (req, res) => {
    res.render('404/index');
});
app.listen(8000,()=>{
    console.log('listening on port 8000');
})