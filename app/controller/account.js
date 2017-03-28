

exports.login = function* (ctx) {
	const name = this.query.name;
	const pass = this.query.pass;

	// this.query.mdrender

	const user = yield ctx.service.account.get({
		name: name
	});
	if(pass == user.pass){
		ctx.body = {
			state: 1,
			data: user
		}

	}else{
		ctx.body = {
			state: 2,
		}
	}
};
exports.register = function* (ctx) {
	// console.log('----------------------------',ctx)
	const name = this.query.name;
	const pass = this.query.pass;

	console.log('-------------',name,pass)
	const result = yield ctx.service.account.add({
		name: name,
		pass: pass
	});

	if(result){
		ctx.body = {
			state: 1,
		};
	}else{
		ctx.body = {
			state: 2
		};
	}
};
exports.repass = function* (ctx) {
	const id = ctx.query.id;
	// const oldpass = ctx.query.oldpass;
	const newpass = ctx.query.pass;

	console.log('-------------',id,newpass)

	const result = yield ctx.service.account.set({
		id: id,
		pass: newpass
	});
	if(result){
		ctx.body = {
			state: 1,
		};
	}else{
		ctx.body = {
			state: 2,
		};
	}
};



