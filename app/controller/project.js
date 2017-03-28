
exports.init = function* (ctx) {
  const user = yield ctx.service.account.init();
  ctx.body = {
  	state: 1,
  	info: '初始化已结束'
  };
};