const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const path = require('path');
//Database conection
const { db } = require("./database");

//setup middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(express.static('./public/build/'));
console.log(path.join(__dirname,'build'))

//routes
app.use('/api/auth', require('./routes/UserLogin.routes'));
app.use('/api/post', require('./routes/Post.routes'));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});

app.listen(3000,()=>{
    console.log("Running in port 3000")
});

