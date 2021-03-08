require('dotenv').config();

const express = require('express');

const Home = require('../controllers/Home');

const app = express();

app.get('/', Home.index);

app.listen(3000, function () {
    console.log('servidor rodando 🔥');
});
