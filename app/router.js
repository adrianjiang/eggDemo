'use strict';

module.exports = app => {
	const jsonp = app.jsonp();

  	app.get('/', 'home.index');
  	app.get('/user/:id', 'user.info');

  	app.get('/hello', jsonp, 'hello.hi');
  	app.get('/hello/img', jsonp, 'hello.img');

};


// module.exports = app => {
//   app.get('/user/:id', 'user.js');
// };
// module.exports = function* (ctx) {
//   ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
// };