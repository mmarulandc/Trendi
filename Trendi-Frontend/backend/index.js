const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
//Database conection
const { db } = require("./database");

//setup middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/auth', require('./routes/UserLogin.routes'));
app.listen(3000,()=>{
    console.log("Running in port 3000")
});

