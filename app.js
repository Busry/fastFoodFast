
// {____________DEPENDENCIES___________________

const express = require('express');

const app = express();

// ____________DISPLAY ACTIVITIES ON CONSOLE______

const morgan = require('morgan');

app.use(morgan('dev'));

// ____________BODY PARSING________________

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ____________ORDERS REQUEST HANDLING______________

// Importingorders route file
const orderRoutes = require('./api/routes/orders');

// It middle ware(req, res_Handler)
app.use('/api/v1/orders', orderRoutes);


// ____________RETURNING____________________________

module.exports = app;
