const express = require('express')
const app = express()
const path = require('path');
const ejsMate = require('ejs-mate');
const loginRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');
const chatbotRoutes = require('./routes/chatbot');
const courseRoutes = require('./routes/course');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const quizRoutes = require('./routes/quiz');

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

// MongoDB connection with caching for serverless (Vercel)
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/learnSmart';
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb && mongoose.connection.readyState === 1) {
        return cachedDb;
    }
    try {
        cachedDb = await mongoose.connect(dbUrl, { dbName: 'learnSmart' });
        console.log('Connected to MongoDB');
        return cachedDb;
    } catch (err) {
        console.error('MongoDB connection error:', err);
        cachedDb = null;
        throw err;
    }
}

// Middleware to ensure DB is connected before handling requests
app.use(async (req, res, next) => {
    try {
        await connectToDatabase();
        next();
    } catch (err) {
        console.error('DB middleware error:', err.message);
        next(); // Continue anyway, route handlers have their own try-catch
    }
});

app.use(loginRoutes);
app.use(chatbotRoutes)
app.use(adminRoutes)
app.use(courseRoutes)

app.get('/', (req,res)=>{
    res.render('Home/index.ejs')
})
app.use(quizRoutes)

// Health check / debug endpoint
app.get('/api/health', async (req, res) => {
    const status = {
        dbState: mongoose.connection.readyState,
        dbStateText: ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState],
        dbUrl: dbUrl ? dbUrl.replace(/\/\/.*@/, '//***:***@') : 'NOT SET',
        envSet: !!process.env.MONGODB_URI,
    };
    try {
        await connectToDatabase();
        status.testConnection = 'SUCCESS';
    } catch (err) {
        status.testConnection = 'FAILED';
        status.error = err.message;
    }
    res.json(status);
});

app.get('/Err', (req, res) => {
    res.render('404/index');
});
app.get('*', (req, res) => {
    res.render('404/index');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
module.exports = app;