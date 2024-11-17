const express = require('express')
const app = express()
const path = require('path');
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
    res.render('Home/index.ejs')
})
app.listen(8000,()=>{
    console.log('listening on port 8000');
})