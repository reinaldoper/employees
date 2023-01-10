// src/app.js

const express = require('express');
const cors = require('cors');
/* const morgan = require('morgan'); */

const employee = require('./controllers/employee.controller');

const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json());
/* app.use(morgan('tiny')); */

app.get('/employees', employee.getAll);

app.get('/employees/:id', employee.getById);

app.post('/employees', employee.insert);

module.exports = app;