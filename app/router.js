'use strict';

var koa = require('koa'); 
var cors = require('koa-cors'); 

// var app = koa(); 

module.exports = app => {
	// const jsonp = app.jsonp();
	app.use(cors());

  	app.get('/', 'home.index');

  	// 路径传参
  	// http://localhost:7001/user/123
  	app.get('/user/:id', 'user.info');

  	app.get('/hello', 'hello.hi');
  	app.get('/hello/img', 'hello.img');

  	app.get('/init', 'project.init');


  	app.get('/account/login', 'account.login');
  	app.get('/account/register', 'account.register');
  	app.get('/account/repass', 'account.repass');



};


// module.exports = app => {
//   app.get('/user/:id', 'user.js');
// };
// module.exports = function* (ctx) {
//   ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
// };