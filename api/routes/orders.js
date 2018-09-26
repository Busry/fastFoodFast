//_________Dependencies______________________
const Joi = require('joi');

const express = require('express');

const router = express.Router();

//_________________"Dummy data" ______________________

const orders = [
  
  {
    orderId: 1,
    mealType: 'garri',
    quantity:' one plate',
    totalPrice: 300,
    date: '12/12/12',
    time: '10:10'
    
  },
  
  {
     orderId: 2,
    mealType: 'Rice',
    quantity:' one plate',
    totalPrice: 200,
    date: '1/12/12',
    time: '11:10'
  },
  
  {
    orderId: 3,
    mealType: 'semo',
    quantity:' one plate',
    totalPrice: 350,
    date: '1/12/12',
    time: '12:10'
  }
  
];

//_________________"/orders" ______________________


// GET  "/orders" request handling
router.get('/', (request, response, next) => {
  response
    .status(200)
    .send(orders);
//    .json({
//      message: 'get all orders'
//    });
});


// POST  "/orders" request handling
router.post('/', (request, response, next) => {
  
  // schema
  const schema = {
    
    mealType: Joi.string().min(3).required()
    
  }
 // validation with joi
  const result = Joi.validate(request.body, schema);
  
   if ( result.error ) {
    response
    .status(400)
    .send(result.error.details[0].message);
     return;
    
  }
  
  
  const order = {
    
    orderId: orders.length + 1,
    mealType: request.body.mealType,
    quantity: request.body.quantity,
    totalPrice: request.body.totalPrice,
    date: request.body.date,
    time: request.body.time
    
  };
 
  orders.push(order);
  response
    .status(201)
    .send(order);
});

//_______________"/orders/{id}" __________________________


// fetch /:orderId request handling
router.get('/:orderId', (request, response, next) => {
 
  const id = request.params.orderId;
  const order = orders.find( c => c.orderId === parseInt(id));
  
  if (!order) {
    
    response
      .status(404)
      .send('not found');
    
  }
  response
    .status(201)
    .send(order);
});


// put /:orderId request to update an order
router.put('/:orderId', (request, response, next) => {
  response
    .status(200)
    .json({
      message: 'updated the order status'
    });
});

// _________________________________________________________
//* ********************************************************

module.exports = router;