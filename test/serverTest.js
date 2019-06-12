// _________ Dependency_______________
import chai from 'chai';
import server from '../server.js';
import request from 'supertest';

var should = chai.should;


//____________ GET /orders testing_________________________

describe(
	"Api testing",
	() => {
		it(
			"test case of call",
			() => {
				request(server)
					.get("http://localhost:2018/api/v1/orders")
					.set('accept', 'application/json')
					.expect(200,done)
			}

		)
	}

)



// const assert = require('chai').assert;
// const should = require('chai').should;
// const server = require('../server.js');

// const request = require("request");


//describe("server", () => {
	//var server;

//	beforeAll(() => {
//		server = require("../server");
//	});
//	afterAll(() => {
//		server.close();
//	});

  	
////____________ GET /orders testing_________________________
//
//  	describe("GET /orders", () => {
//		var data = {};
//
//		beforeAll((done) => {
//			request.get("http://localhost:2018/api/v1/orders", (error, response, body) => {
//				data.status = response.statusCode;
//				data.body =JSON.parse(body);
//				done();
//			});
//		});
//
//		it("status 200", () => {
//			expect(data.status).toBe(200);
//		});
//		it("Body", () => {
//			expect(data.body.message).toBe('get all orders');
//		});
//	});
//
////____________ GET /orders testing_________________________
//
//  	describe("POST /orders", () => {
//		var data = {};
//
//		beforeAll((done) => {
//			request.post("http://localhost:2018/api/v1/orders", (error, response, body) => {
//				data.status = response.statusCode;
//				data.body = JSON.parse(body);
//				done();
//			});
//		});
//
//		it("status 201", () => {
//			expect(data.status).toBe(201);
//		});
//		it("Body", () => {
//			expect(data.body.message).toBe('place a new order');
//		});
//	});
//});

// //____________ GET /orders/:orderId  testing_________________________

//   	describe("GET /orders/:orderId", () => {
// 		var data = {};

// 		beforeAll((done) => {
// 			request.get("http://localhost:2018/api/v1/orders/:orderId", (error, response, body) => {
// 				data.status = response.statusCode;
// 				data.body =JSON.parse(body);
// 				done();
// 			});
// 		});

// 		it("status 200", () => {
// 			expect(data.status).toBe(200);
// 		});
// 		it("Body", () => {
// 			expect(data.body.message).toBe('fetch a specific order');
// 		});
// 	});

//____________ GET /orders/:orderId  testing_________________________

//   	describe("PUT /orders/:orderId", () => {
      
// 		var data = {};

// //		beforeAll((done) => {
// //			
// //			request.put("http://localhost:2018/api/v1/orders/<orderId>", (error, response, body) => {
// //				data.status = response.statusCode;
// //				data.body =JSON.parse(body);
// //				done();
// //			});
// //		});

// 		it("status 200", (done) => {
// 			expect(data.status).toBe(200);
// 		});
// 		it("Body", (done) => {
// 			expect(data.body.message).toBe('updated the order status');
// 		});
// 	});