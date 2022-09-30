const express = require('express');
const app = express();

const apiRouter = require('./api');
app.use('/api', apiRouter);







const PORT = 3000;
app.listen(PORT, (test) => {
    console.log('connected to: ', PORT)
})