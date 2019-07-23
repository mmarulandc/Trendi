const express = require('express');
const morgan = require('morgan');
const app = express();


//setup middlewares
app.use(morgan('dev'));
app.listen(4000);
