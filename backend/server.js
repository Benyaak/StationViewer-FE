const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const PORT = process.env.PORT || 3000;
const sessionConfig = require('./config/session')
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(sessionConfig);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.options('*', cors({origin:"http://localhost:8080"}))

app.get('/*', (req, res, next) =>{
    res.header('Cache-Control', 'no-cache, no-store');
    next();
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}.`);
});