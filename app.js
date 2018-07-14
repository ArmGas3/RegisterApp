const express = require('express');
const bps = require('body-parser');
const controller = require('./controller/controller');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(bps());
app.use('/', controller);

app.listen(3000, () => console.log('lsumem...'));