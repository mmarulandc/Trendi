const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser')
const app = express();
//Database conection
const { db } = require("./database");

//setup middlewares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/api/auth', require('./routes/UserLogin.routes'));

app.listen(4000,()=>{
    console.log("Running in port 4000")
});

