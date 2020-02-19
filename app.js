const express = require('express');// REST
const app = express();
const bodyParser = require('body-parser'); // body-parser pour parse une post request

const userRouter =require('./routes/user-router');

//middleweare
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use(bodyParser.json());

app.use('/api/auth', userRouter);

module.exports  = app;