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
  
//validate order
  const {error} =  validateOrder(request.body); //object distructuring
  
//if invalid return 400-bad rquest
  if ( error ) {
    response
    .status(400)
    .send(error.details[0].message);
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
 // look up the order
  const id = request.params.orderId;
  const order = orders.find( c => c.orderId === parseInt(id));
  
  //if not existing return 404
  if (!order) {
    
    response
      .status(404)
      .send('not found');
    
  }
  
  //else validate order
  //const result =  validateOrder(request.body);
  const {error} =  validateOrder(request.body); //object distructuring
  
    //if invalid return 400-bad rquest
  if ( error ) {
    response
    .status(400)
    .send(error.details[0].message);
     return;
    
  }
    //else  update the course
    order.mealType = request.body.mealType;
    order.quantity = request.body.quantity;
    order.totalPrice = request.body.totalPrice;
    order.date = request.body.date;
    order.time = request.body.time;
  
    //And return the updated course
  
  response
    .status(200)
    .send(order);
});

// _________________________________________________________
function validateOrder(order) {
  const schema = {
    
    mealType: Joi.string().min(3).required(),
    quantity: Joi.number().integer().min(1).max(2013),
    totalPrice:  Joi.number().integer().min(1).max(2013),
    date:  Joi.string(),
    time: Joi.string()
    
  };
 // validation with joi
  return Joi.validate(order, schema);
  
  
}

//* ********************************************************

module.exports = router;