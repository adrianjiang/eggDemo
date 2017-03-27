exports.hi = function* (ctx) {
	ctx.body = {
		name: 'hi adrian',
	};
};
exports.img = function* (ctx) {
	// ctx.body = require('../public/img/t_001.png')
	// ctx.body = ctx.public;
	ctx.body = {
		name: 'hello/img',
		info: '行不行啊'
	}

	// sendFile(response, absPath, data);
};
